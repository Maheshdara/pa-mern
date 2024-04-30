import './style.css';
import { Link } from "react-router-dom";

const curentYear = new Date().getFullYear();


const Footer = () => {
    return (
        <>

            <footer className=' footer_bg'>

                <div className="text-center p-3">
                    © {curentYear} Copyright:
                    <Link className="text-dark" to="https://procureanalytics.com/" target='_blank'>Procure Analytics</Link>
                </div>
            </footer>

        </>
    )
}

export default Footer;





