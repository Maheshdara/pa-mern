import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

const DisplayProducts = ({
  setVisible,
  searchResults,
  setSideProducts,
  setProduct,
  totalPages,
  setPageNumber,
  totalCount,
  startIndex,
  endIndex,
}) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(1);
  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
    setPageNumber(Math.ceil(event.first / event.rows) + 1); // Calculate the page number based on first
};
  const handleProductDetails = (data) => {
    setProduct(data);
    setVisible(true);
    setSideProducts([data]);
  };


  return (
    <div>
      <div
        className="card flex "
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          flexWrap: "wrap",
          // border: "1px solid",
        }}
      >
        {searchResults.map((result, index) => (
          <Card style={{ width: "290px" }} key={index}>
            <div style={{ textAlign: "center" }}>
              <div style={{ background: "WhiteSmoke", padding: "0.5rem" }}>
                <h6>Manufacturer Number:</h6>
                <h6>{result.manufacturerNumber} </h6>
              </div>

              <h6>Item Number: {result.itemNumber}</h6>
              <p className="font12" style={{ color: "#0d6efd" }}>
                <span className="startRating">
                  {result.overallRating === "" ? 0 : result.overallRating} ★
                </span>
                <span onClick={() => handleProductDetails(result)} style={{cursor:"pointer"}}>
                  View Product Details »
                </span>
              </p>
              <Divider />
            </div>
            <div className="allDetails PA_searchData font12">
              <p>
                <b>Product Name:</b>
              </p>
              <p>{result.productName}</p>
              <p>
                <b>Supplier:</b>
              </p>
              <p>{result.supplier}</p>
              <p>
                <b>Full Breadcrumbs: </b>
              </p>
              <p>{JSON.parse(result.fullBreadcrumbs).join(", ")}</p>

              <p>
                <b>Product Url: </b>
              </p>
              <p>
                <a href="${result.productUrl}" target="_blank">
                  Show Product
                </a>
              </p>
            </div>
            <Divider />
          </Card>
        ))}

      </div>
      {searchResults.length > 0 && (
          <div style={{ position: "relative", bottom: "0", right: "0", display:"flex",justifyContent:"space-between",marginTop:"10px" }}>
            <div>
            <p>Products {startIndex} to {endIndex} of {totalCount}</p>
            </div>
            <Paginator first={first} totalRecords={totalPages}    rows={rows} onPageChange={onPageChange} />
          </div>
        )}
    </div>
  );
};

export default DisplayProducts;
