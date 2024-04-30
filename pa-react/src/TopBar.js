import { Link } from "react-router-dom";

const Topbar = () =>{
    return(
      <>
      <div className=''>
            <div className='row fr_nav py-2 px-xl-5'>
                <div className='col-lg-6 d-none d-lg-block'>
                <div className="d-inline-flex align-items-center">
                    <Link className="text-dark" to="">FAQs</Link>
                    <span className="text-muted px-2">|</span>
                    <Link className="text-dark" to="">Help</Link>
                    <span className="text-muted px-2">|</span>
                    <Link className="text-dark" to="">Support</Link>
                </div>
                </div>
                <div className='col-lg-6 text-end text-lg-right'>
                <div className="d-inline-flex align-items-center">
                    <Link className="text-dark px-2" to="">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link className="text-dark px-2" to="">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link className="text-dark px-2" to="">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link className="text-dark px-2" to="">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link className="text-dark pl-2" to="">
                        <i className="fab fa-youtube"></i>
                    </Link>
                </div>
                </div>
            </div>

            <div className="row align-items-center com_logo py-3 px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">                
                <Link to="https://procureanalytics.com/" target='_blank' className="navbar_brand">
                <img src='../img/pa_logo.png' className="img-fluid " alt="brand logo" height="30"/> SUPPORT CENTER       
                </Link>
                
            </div>
            <div className="col-lg-6 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products"/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search custom_fa_search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            {/* <div className="col-lg-3 col-6 text-end">
                <Link to="" className="btn border">
                    <i className="fas fa-heart custom_text_primary"></i>
                    <span className="badge">0</span>
                </Link>
                <Link to="" className="btn border">
                    <i className="fas fa-shopping-cart custom_text_primary"></i>
                    <span className="badge">0</span>
                </Link>
            </div> */}
        </div>
        </div>
      </>
    )
    };
  
export default Topbar;