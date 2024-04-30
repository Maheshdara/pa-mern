import { useEffect } from "react";
import "./style.css";
import { NavLink} from "react-router-dom";


const Nav = () => {
  useEffect(() => {
    document.querySelectorAll(".nav-item:not(.dropdown)").forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector(".hideShow").classList.remove("show");
      });
    });
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  py-lg-0 px-0">
        <NavLink
          to="https://procureanalytics.com/"
          className="text-decoration-none d-block  navbar_brand"
        >
          <img
            src="../img/pa_logo.png"
            className="img-fluid "
            alt="brand logo"
            height="30"
          />{" "}
          SUPPORT CENTER
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between hideShow"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink className="nav-link nav_itemLink" to="/">
                {" "}
                Home
              </NavLink>
            </li>
            <li className="nav-item  dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to="/ViewProducts"
              >
                Products
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li className="nav-item  dropend">
                <NavLink className="dropdown-item" to="/ProductCatalog">
                        Search by Upload
                      </NavLink>
                      <NavLink className="dropdown-item" to="/SearchProducts">
                        Search
                      </NavLink>
                      <NavLink
                        className="dropdown-item"
                        to="/ProductPartNumber"
                      >
                        PA Part Number
                      </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link nav_itemLink" to="/refdataconfigall">
                Support
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
