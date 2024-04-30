import React, { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { ConfigOptions } from "../../SideBar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { IoAdd } from "react-icons/io5";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const ReportUserAll = () => {
  const toast = useRef(null);

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

  const [visible, setVisible] = useState(false);
  const [uploadVisible, setUploadVisible] = useState(false);

  return (
    <div className="container-fluid pt-5 body_bg">
      <Toast ref={toast}></Toast>
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
              label="Upload File"
              onClick={() => setUploadVisible(true)}
              style={{ marginRight: "3px" }}
            />
            <Button
              className="custom_button"
              label="Add New"
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
                  <InputText placeholder={"First Name*"} />
                  <InputTextarea />
                </div>
                <div style={{ display: "flex", gap: "10px", marginTop: "2px" }}>
                  <Button
                    className="btn btn-danger pa-customBtn  custom_button"
                    label="Add"
                  />
                  <Button
                    className="btn btn-danger pa-customBtn  custom_modal_button"
                    onClick={() => setVisible(false)}
                    label="Close"
                  />
                </div>
              </Dialog>
            )}
            {uploadVisible && (
              <Dialog
                header="Upload File"
                visible={uploadVisible}
                style={{ width: "40vw" }}
                onHide={() => setUploadVisible(false)}
              >
                <div className="card flex justify-content-center" >
                  <FileUpload
                    mode="basic"
                    name="demo[]"
                    url="/api/upload"
                    accept="image/*"
                    maxFileSize={1000000}
                    onUpload={onUpload}
                    auto
                    chooseLabel="Browse"
                    style={{justifyContent:"center"}}
                  />
                </div>
                <div style={{ display: "flex", gap: "10px", marginTop: "2px", justifyContent:"right"}}>
                  <Button
                    className="btn btn-danger pa-customBtn  custom_button"
                    label="ShowData"
                  />

                </div>
              </Dialog>
            )}
          </div>
          <DataTable value={""} tableStyle={{ minWidth: "50rem" }}>
            <Column field="code" header="Email Address"></Column>
            <Column field="name" header="Account Manager"></Column>
            <Column field="category" header="Member Id"></Column>
            <Column field="quantity" header="Account Director"></Column>
            <Column field="quantity" header="Member Full Name"></Column>
            <Column field="quantity" header="Member Name"></Column>
            <Column field="quantity" header="Action"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};
export default ReportUserAll;
