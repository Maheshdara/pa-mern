import { Button } from 'primereact/button';
import { NavLink, Link } from "react-router-dom";


const Categories = () => {
    return (
        <>
            <div className="border-bottom  sidebar_sec">
                <Link className="btn shadow-none d-flex align-items-center justify-content-between custom_bg_primary text-white w-100" data-bs-toggle="collapse" to="#navbar-vertical">
                    <h6 className="m-0 text-uppercase">Categories</h6>
                    <i className="fa fa-angle-down custom_text_dark"></i>
                </Link>
                <nav className="collapse Zposition-absolute navbar navbar-vertical navbar-light align-items-start p-0 xborder border-top-0 border-bottom-0 show" id="navbar-vertical">
                    <div className="navbar-nav w-100 overflow-hidden pa_sidebar">
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link " data-bs-toggle="dropdown">Products <i className="fa fa-angle-down float-end mt-1"></i></Link>
                            <div className="dropdown-menu custom_bg_secondary border-0 rounded-0 w-100 m-0 pa_sub_sidebar">
                                <Link to="" className="dropdown-item ">Search Products</Link>
                                <Link to="" className="dropdown-item">View Products</Link>
                                <Link to="" className="dropdown-item">Product part Number</Link>
                                <Link to="" className="dropdown-item">Add Products </Link>
                                <Link to="" className="dropdown-item">Metrics </Link>
                            </div>
                        </div>
                        <Link to="" className="nav-item nav-link">Upload</Link>
                        <Link to="" className="nav-item nav-link">Suppliers</Link>
                        <Link to="" className="nav-item nav-link">Products Catalog</Link>
                        <Link to="" className="nav-item nav-link">Products Search</Link>
                        <Link to="" className="nav-item nav-link">All Suppliers</Link>
                        <Link to="" className="nav-item end_nav_link">Recently Added</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}
export const SideOptions = () => {
    return (
        <>

            <ul className="supplierFields text-center">

                <li className="new_submenuTwo_head ">
                    <NavLink to="/ProductCatalog" className="submenuTwo_text font-weight-semi-bold " >
                        Upload File
                    </NavLink>
                </li>

                <li className="new_submenuTwo_head ">
                    <NavLink to="/ProductCatalogStatus" className="submenuTwo_text font-weight-semi-bold ">
                        Upload Status
                    </NavLink>
                </li>

            </ul>

            {/* <div class="supplierFields">
                <NavLink to="/ProductCatalog" className="new_submenuTwo_head shadow-none w-100 d-flex align-items-center justify-content-between" style={{ marginTop: '-1px', padding: '10px 12px 0px 12px' }}>
                    <h6 className="font-weight-semi-bold text-uppercase ">Upload File</h6>
                </NavLink>

                <NavLink to="/ProductCatalogStatus" className="new_submenuTwo_head shadow-none w-100 d-flex align-items-center justify-content-between" style={{ marginTop: '-1px', padding: '10px 12px 0px 12px' }}>
                    <h6 className="font-weight-semi-bold text-uppercase ">Upload Status</h6>
                </NavLink>

            </div> */}
        </>
    )
}
export const ConfigOptions = () => {
    return (
        <>

            <ul className="supplierFields text-center">

                <li className="new_submenuTwo_head ">
                    <NavLink to="/refdataconfigall" className="submenuTwo_text font-weight-semi-bold " >
                        Reference Data
                    </NavLink>
                </li>

                <li className="new_submenuTwo_head ">
                    <NavLink to="/ReportUserAll" className="submenuTwo_text font-weight-semi-bold ">
                        Report User
                    </NavLink>
                </li>



                <li className="new_submenuTwo_head ">
                    <NavLink to="/companydetails" className="submenuTwo_text font-weight-semi-bold ">
                        Company Details
                    </NavLink>
                </li>

                <li className="new_submenuTwo_head ">
                    <NavLink to="/package-programme" className="submenuTwo_text font-weight-semi-bold ">
                        Package Programe
                    </NavLink>
                </li>

                <li className="new_submenuTwo_head ">
                    <NavLink to="/columnvalidation" className="submenuTwo_text font-weight-semi-bold " >
                        Column Validations
                    </NavLink>
                </li>

                <li className="new_submenuTwo_head ">
                    <NavLink to="/dataflow" className="submenuTwo_text font-weight-semi-bold ">
                        Data Flow
                    </NavLink>
                </li>
            </ul>

        </>
    )
}
export const FilterCatalog = () => {
    return (
        <>
            <div className="border-bottom my-4 py-3 sidebar_sec">
            <h6>Filters by Serach</h6>
                <Link className="shadow-none w-100 d-flex align-items-center justify-content-between" data-bs-toggle="collapse" to="#Catalog" style={{ marginTop: '-1px', padding: '0px 12px 0px 12px' }}>
                    <h6 className="font-weight-semi-bold text-uppercase new_main_head">Supplier</h6>
                    <i className="fa fa-angle-down text-dark"></i>
                </Link>

                <div className="collapse Zposition-absolute navbar navbar-vertical navbar-light align-items-start p-0 border-top-0 border-bottom-0" id="Catalog">
                    <form className="pt-2 pa_sidebar">
                        <div className="custom-control custom-checkbox d-flex align-items-center  mb-3">
                            <input type="checkbox" className="custom-control-input " id="price-all" />
                            <label className="custom-control-label" for="price-all">All Catalog</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-1" />
                            <label className="custom-control-label" for="price-1">$0 - $100</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center  mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-2" />
                            <label className="custom-control-label" for="price-2">$100 - $200</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center  mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-3" />
                            <label className="custom-control-label" for="price-3">$200 - $300</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center  mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-4" />
                            <label className="custom-control-label" for="price-4">$300 - $400</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center">
                            <input type="checkbox" className="custom-control-input" id="price-5" />
                            <label className="custom-control-label" for="price-5">$400 - $500</label>
                        </div>
                    </form>
                </div>
            </div>

            <div className="border-bottom my-4 py-3 sidebar_sec">

                <Link className="shadow-none w-100 d-flex align-items-center justify-content-between" data-bs-toggle="collapse" to="#Location" style={{ marginTop: '-1px', padding: '0px 12px 0px 12px' }}>
                    <h6 className="font-weight-semi-bold text-uppercase new_main_head">Main Category</h6>
                    <i className="fa fa-angle-down text-dark"></i>
                </Link>
                <div className="collapse Zposition-absolute navbar navbar-vertical navbar-light align-items-start p-0 border-top-0 border-bottom-0 " id="Location">
                    <form className="pt-2 pa_sidebar">
                        <div className="custom-control custom-checkbox d-flex align-items-center  mb-3">
                            <input type="checkbox" className="custom-control-input " id="price-all" />
                            <label className="custom-control-label" for="price-all">All Location</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-1" />
                            <label className="custom-control-label" for="price-1">$0 - $100</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center  mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-2" />
                            <label className="custom-control-label" for="price-2">$100 - $200</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center  mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-3" />
                            <label className="custom-control-label" for="price-3">$200 - $300</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center  mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-4" />
                            <label className="custom-control-label" for="price-4">$300 - $400</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center">
                            <input type="checkbox" className="custom-control-input" id="price-5" />
                            <label className="custom-control-label" for="price-5">$400 - $500</label>
                        </div>
                    </form>
                </div>
            </div>

            <div
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "flex-end",
        }}
      >
        <div>
          <Button className="btn btn-outline-success pa-customBtn-sm">
            Rest
          </Button>
        </div>
        <div>
          <Button className="btn btn-outline-success pa-customBtn-sm"  onClick={()=> console.log(true)}>
            Apply
          </Button>
        </div>
      </div>

        </>
    )
}
export const TrendingProducts = () => {
    return (
        <>
            <div className="border-bottom my-4 py-3 sidebar_sec ">
                <Link className="shadow-none w-100 d-flex align-items-center justify-content-between " data-bs-toggle="collapse" to="#Location" style={{ marginTop: '-1px', padding: '0px 12px 10px 12px' }}>
                    <h6 className="font-weight-semi-bold text-uppercase new_main_head">Trending Products</h6>
                </Link>
                <div>
                    <ul className="font12lw  tags">
                        <li>Products</li>
                        <li> Upload</li>
                        <li>Suppliers</li>
                        <li>All Suppliers</li>
                        <li>Recently Added</li>
                        <li> Products Search</li>
                        <li>Metrics</li>
                        <li> Catalog</li>
                    </ul>
                </div>

            </div>


            <div class="accordion" id="accordionExample">

      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>

    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>


      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>

    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>


      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>

    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>

</div>

        </>
    )
}

export default Categories;