import "../../style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { ConfigOptions} from "../../SideBar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const Referance = () => {
  const [visible, setVisible] = useState(false);
  const [allData, setAllData] = useState([]);
  const [fileName, setFileName] = useState();
  const [columns, setColumns] = useState();
  const [targetLoaction, setTargetLoaction] = useState();
  const [data,setData] = useState()

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/ProductCatalogStatusData"
      );
      setAllData(response.data);
    } catch {
      console.log(Error, "error while fetching");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = async (rowdata) => {
    console.log(rowdata,"data")
    setVisible(true);
    setFileName(rowdata?.FileName);
    setColumns(rowdata?.Columns);
    setTargetLoaction(rowdata?.TL);
    setData(rowdata)

  };

  const handlePost = () => {
    console.log(data.id)
    try{
      const body = {
        FileName:fileName,
        Columns:columns,
        TL:targetLoaction
      }
     const response =  axios.patch(`http://localhost:5000/ProductCatalogStatusData/${data.id}`,body)
     console.log(response.data)
    }
    catch{
      console.log(Error,"error")
    }

    }

    const handleDelete =  async (rowdata) => {
      console.log(rowdata,"sadasd")
      try {
         await axios.delete(`http://localhost:5000/ProductCatalogStatusData/${rowdata.id}`);
        // After successful deletion, update the state to reflect the change
        // setAllData(allData.filter(row => row.id !== id));
      } catch (error) {
        console.error("Error while deleting data:", error);
      }
      fetchData();
    }




  const actionBodyTemplate = (rowData) => {
    return (
      <div style={{ display: "flex", gap: "1px" }}>
        <Button
          icon="pi pi-pencil"
          onClick={() => handleEdit(rowData)}
        />
        <Button icon="pi pi-times"
        onClick={()=>handleDelete(rowData)}
        />
      </div>
    );
  };

  return (
    <>
      <div className="container-fluid pt-5 body_bg">
        <div className="row px-xl-5">
          <div className="col-lg-2 col-md-3 col-sm-3 col-3">
            <div className="sidebar_sec">
              <ConfigOptions />
            </div>
          </div>
          <div className="col-lg-10 col-md-9 col-sm-9 col-9">
            <div className="col-lg-12 text-end text-lg-right">
              <Button
                className="custom_button"
                label="Add New"
                icon="pi pi-plus"
                onClick={() => setVisible(true)}
              />
              {visible && (
                <Dialog
                  header="Add Referance Data Configuration"
                  visible={visible}
                  style={{ width: "40vw" }}
                  onHide={() => setVisible(false)}
                >
                  <div className="card flex justify-content-center gap-3">
                    <InputText
                      value={fileName}
                      onChange={(e) => setFileName(e.target.value)}
                      placeholder={"First Name*"}
                    />
                    <InputTextarea
                      value={columns}
                      onChange={(e) => setColumns(e.target.value)}
                      placeholder={"Column*"}
                    />
                    <InputText
                      value={targetLoaction}
                      onChange={(e) => setTargetLoaction(e.target.value)}
                      placeholder={"Target Location*"}
                    />
                  </div>
                  <div
                    style={{ display: "flex", gap: "10px", marginTop: "2px" }}
                  >
                    <Button
                      className="btn btn-danger pa-customBtn  custom_button"
                      label="Add"
                      onClick={handlePost}
                    />
                    <Button
                      className="btn btn-danger pa-customBtn  custom_modal_button"
                      onClick={() => setVisible(false)}
                      label="Close"
                    />
                  </div>
                </Dialog>
              )}
            </div>
            <DataTable value={allData}>
              <Column field="FileName" header="File Name"></Column>
              <Column field="Columns" header="Columns"></Column>
              <Column field="TL" header="Traget Location"></Column>
              <Column
                field="quantity"
                body={actionBodyTemplate}
                header="Action"
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </>
  );
};

export default Referance;
