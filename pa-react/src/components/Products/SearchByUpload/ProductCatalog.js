import '../../../style.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { SideOptions, FilterCatalog, TrendingProducts } from '../../../SideBar';
import Categories from '../../../SideBar';
import *as xlsx from 'xlsx';
import axios from 'axios';




const ProductCatalog = () => {

    // onchange states
    const [excelFile, setExcelFile] = useState(null);
    const [typeError, setTypeError] = useState(null);

    // submit state
    const [excelData, setExcelData] = useState(null);

    // onchange event
    const readExcel = async (e) => {
        let fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileTypes.includes(selectedFile.type)) {
                setTypeError(null);
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFile(e.target.result);
                }
            }
            else {
                setTypeError('Please select only excel file types');
                setExcelFile(null);
            }
        }
        else {
            console.log('Please select your file');
        }
    }

    // submit event
    const handleFileSubmit = (e) => {
        e.preventDefault();
        if (excelFile !== null) {
            const workbook = xlsx.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = xlsx.utils.sheet_to_json(worksheet);
            setExcelData(data.slice(0, 10));
        }
    }

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <div className="sidebar_sec">
                            <SideOptions />
                            <div className='pt-3'>
                                {/* <FilterCatalog />
                                <TrendingProducts /> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">

                        <div className='text-center'>
                            <h4>Upload New File
                                <span class="btn btn-outline-info" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="File size must be less than 10MB.">
                                    ?
                                </span>
                            </h4>
                            <div class="font12 mb-1">Create or Update or Delete Products and Suppliers by uploading file.</div>

                            <div class="row input-group mb-2 font12">
                                <form onSubmit={handleFileSubmit} method="post" enctype="multipart/form-data" id="uploadForm">
                                    <input class="form-control uploadfile" type="file" required onChange={readExcel} />
                                    <button class="btn btn-primary " type="submit" >Upload</button>
                                </form>
                            </div>
                        </div>

                        <div class="row col-12 input-group mb-5 mt-5 text-start">
                            <div class="   upload-img "><h6>&nbsp;File Upload Instructions</h6></div>
                            <div class="card col-sm mx-1">
                                <div class="card-body">
                                    <ul class="list-group list-group-flush font12">
                                        <li class="list-group-item">File size should be less than 10MB.</li>
                                        <li class="list-group-item">Only xls or xlsx files are allowed as valid file type.</li>
                                        <li class="list-group-item">File must contain 'Products' and/or 'Suppliers' sheets with valid data.</li>
                                        <li class="list-group-item">File must contain valid fields in both the sheets if they are added(see below for allowed fields). </li>
                                        <li class="list-group-item">Blank fields must be included as part of the file. Mandatory fields must have valid data in order to process records. </li>
                                        <li class="list-group-item">Files uploaded will be processed by a scheduler sequentially in the order they were uploaded.</li>
                                        <li class="list-group-item">Appropriate job Status will be logged under Job Id as files are processed.&nbsp;<a href="/catalog/upload/status/all?page=1" class="link">View Status </a></li>

                                    </ul>
                                </div>
                            </div>
                            <div class="card col-sm mx-1">
                                <div class="card-body">
                                    <h6 class="card-title  text-start mt-2">Valid Supplier Fields</h6>
                                    <h6 class="card-subtitle  text-start card-subtitle mb-2 text-muted font14lw text-start">* represents mandatory fields</h6>
                                    <ul class="list-group list-group-flush font12">
                                        <li class="list-group-item">PA Part number *</li>
                                        <li class="list-group-item">Action
                                            <div class="font12lw">System defaults to <i>Create</i> or <i>Update</i> if not provided in the file.</div>
                                        </li>
                                        <li class="list-group-item">Supplier Name *</li>
                                        <li class="list-group-item">Location *
                                            <div class="font12lw"><i>Location</i> must be one of the existing values configured in the system. Please raise a request to Technical Support for new additions.</div>
                                        </li>
                                        <li class="list-group-item">Supplier Description *</li>
                                        <li class="list-group-item">Supplier Part Number *</li>
                                        <li class="list-group-item">Part Description *</li>
                                        <li class="list-group-item">UOM *</li>
                                        <li class="list-group-item">Price</li>
                                        <li class="list-group-item">Pack Size *</li>
                                        <li class="list-group-item">OEM
                                            <div class="font12lw">System defaults to <i>No</i> if not provided in the file.</div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductCatalog;





