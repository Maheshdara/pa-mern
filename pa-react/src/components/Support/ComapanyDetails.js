import React from "react";
import { ConfigOptions } from '../../SideBar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IoAdd } from "react-icons/io5";



const ComapanyDetails = () => {
  return (
    <div className="container-fluid pt-5 body_bg">
    <div className="row px-xl-5">
      <div className="col-lg-3 col-md-3 col-sm-3 col-3">
        <div className="sidebar_sec">
          <ConfigOptions />
        </div>
      </div>

      <div className="col-lg-9 col-md-9 col-sm-9 col-9">
        <div className='form_div'>
          <div>
          <div>
          <div className="d-flex">
              <div className="col-lg-12 text-end text-lg-right">
                <input type="file" id="actual-btn" hidden />
                {/* <label for="actual-btn" className="btn pa-customBtn  custom_button " ><MdOutlineFileUpload className='icon_style' />Select Folder</label> */}

                <button
                  type="button"
                  className="btn pa-customBtn  custom_button mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  <IoAdd className="icon_style" /> File Upload
                </button>
                <button
                  type="button"
                  className="btn pa-customBtn  custom_button mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  <IoAdd className="icon_style" /> Add New
                </button>
                {/* <button type="button" className="btn outline_custom_button" >Download</button> */}
              </div>
            </div>
          </div>
          </div>
       <DataTable value={''} tableStyle={{ minWidth: '50rem' }}>
            <Column field="code" header="File Name"></Column>
            <Column field="name" header="Columns"></Column>
            <Column field="category" header="Traget Location"></Column>
            <Column field="quantity" header="Action"></Column>
        </DataTable>
        </div>

      </div>
    </div>
  </div>

  );
};
export default ComapanyDetails;