import '../../../style.css';
// import Categories from './SideBar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { SideOptions, FilterCatalog, TrendingProducts } from '../../../SideBar';
import { FaPencilAlt } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { CgDisplaySpacing } from "react-icons/cg";
import { RiDeleteBin5Line } from "react-icons/ri";
import *as xlsx from 'xlsx';
import { CSVLink } from 'react-csv';
// import DB from "./db.json"

const ProductCatalogStatus = () => {

  const [excelData, setExcelData] = useState([])

  // const [storeExcelData, setStoreExcelData] = useState()



  const readExcel = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer(file);
    const excelfile = xlsx.read(data);
    const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]];
    const exceljson = xlsx.utils.sheet_to_json(excelsheet);
    console.log(exceljson)
    setExcelData(exceljson)
    // setStoreExcelData(exceljson)

  }

  // first data grab
  useEffect(() => {
    axios.get("http://localhost:4000/ProductCatalogStatusData")
      .then(resp =>
        setExcelData(resp.data)
      )
      .catch(er => console.log(er))
  }, []);


  // const storeData = () => {
  //   const Number = excelData.map((ele)=>ele.Number )
  //   const FileName = excelData.map((ele)=>ele.FileName )
  //   const Columns = excelData.map((ele)=>ele.Columns )
  //   const TL = excelData.map((ele)=>ele.TL )
  //   axios.post('http://localhost:4000/ProductCatalogStatusData', {Number, FileName, Columns, TL})
  //     .then(resp => {
  //       console.log(resp)
  //       window.location.reload()
  //     })
  //     .catch(er => console.log(er))
  // }

  const storeData = () => {
    axios.post('http://localhost:4000/ProductCatalogStatusData', { excelData })
      .then(resp => {
        window.location.reload()
      })
      .catch(er => console.log(er))
  }

  return (
    <>
      <div className="container-fluid pt-5 body_bg">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-3 col-sm-3 col-3">
            <div className="sidebar_sec">
              <SideOptions />
              <div className=''>
                {/* <FilterCatalog />
                <TrendingProducts /> */}
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-9 col-9 mb-5">
          <h4>Product Search-File Processing Status</h4>
            <div className='form_div'>
              <div className='mt-4'>
                <div style={{display:"flex", gap:"1rem",fontWeight:"bold"}}>
                  {/* <div className=''> <p>Serial No. </p></div> */}
                  <div className=''> <span>Job Id</span></div>
                  <div className=""> <span>Date Uploaded</span></div>
                  <div className=""> <span>File Name</span></div>
                  <div className=""> <span>Uploaded By</span></div>
                  <div className=""> <span>Matches Data</span></div>
                  <div className=""> <span>Processing started</span></div>
                  <div className=""> <span>Processing Ended</span></div>
                  <div className=""> <span>Action</span></div>
                </div>
                <hr style={{color:"#69a342"}}/>
              </div>

              <div>
                {excelData.map((ele, ind) => (

                  <div className='product_catalog_table font12lw ' key={ind}>
                    <div className='table_bd'>{ele.Number}</div>
                    <div className='table_bd'>{ele.FileName}</div>
                    <div className='table_bd'>{ele.Columns}</div>
                    <div className='table_bd'>{ele.TL}</div>
                    <div className='table_bd'>
                      <span className="Action_icon"><FaPencilAlt className="edit_icon" data-bs-toggle="modal" data-bs-target="#exampleModal" /> Edit</span>
                      <span className='Action_icon mx-3'><RiDeleteBin5Line className="close_icon " /> Delete</span>

                    </div>
                  </div>

                ))}

                {/* {
                  DB && DB.map((ele, ind) => {
                    return (
                      <div className='product_catalog_table font12lw ' key={ind}>
                        <div className='table_bd'>{ele.Number}</div>
                        <div className='table_bd'>{ele.FileName}</div>
                        <div className='table_bd'>{ele.Columns}</div>
                        <div className='table_bd'>{ele.TL}</div>
                        <div className='table_bd'>
                          <span className="Action_icon"><FaPencilAlt className="edit_icon" data-bs-toggle="modal" data-bs-target="#exampleModal" /> Edit</span>
                          <span className='Action_icon mx-3'><RiDeleteBin5Line className="close_icon " /> Delete</span>

                        </div>
                      </div>
                    )
                  })
                } */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCatalogStatus;