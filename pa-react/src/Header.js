import './style.css';
import Topbar from './TopBar';
import Nav from './Nav';

const Header = () => {
    return (
        <>
        <div className="container-fluid">
        {/* <Topbar/> */}
            <div className="row border-top fr_nav px-xl-5">
                {/* <div className="col-lg-3 d-none d-lg-block"></div> */}
                <div className='col-lg-12'>
                    <Nav />
                </div>
                </div>
            </div>
        </>
    )
}


export default Header;