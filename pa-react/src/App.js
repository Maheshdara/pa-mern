import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home.js";
import SearchProducts from "./components/Products/SearchProducts/SearchProducts.js";
import ProductPartNumber from "./components/Products/ProductPartNumber.js";
import ProductCatalog from "./components/Products/SearchByUpload/ProductCatalog.js";
import ProductCatalogStatus from "./components/Products/SearchByUpload/ProductCatalogStatus.js";
import ReportUserAll from "./components/Support/ReportUserAll.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Referance from "./components/Support/Referance.js";
import PackageProgram from "./components/Support/PackageProgram.js";
import ColumnValidation from "./components/Support/ColumnValidation.js";
import DataFlow from "./components/Support/DataFlow.js";
import ComapanyDetails from "./components/Support/ComapanyDetails.js";


const App = () => {
     return (
        <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SearchProducts" element={<SearchProducts />} />
            <Route path="/ProductPartNumber" element={<ProductPartNumber />} />
            <Route path="/ProductCatalog" element={<ProductCatalog />} />
            <Route
              path="/ProductCatalogStatus"
              element={<ProductCatalogStatus />}
            />
            <Route path="/ReportUserAll" element={<ReportUserAll />} />
            <Route path="/companydetails" element={<ComapanyDetails />} />
            <Route path="/refdataconfigall" element={<Referance />} />
            <Route path="/package-programme" element={<PackageProgram />} />
            <Route path="/columnvalidation" element={<ColumnValidation />} />
            <Route path="/dataflow" element={<DataFlow />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
     )
};

export default App;