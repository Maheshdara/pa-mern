import { Accordion, AccordionTab } from "primereact/accordion";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Divider } from "primereact/divider";
import { Sidebar } from "primereact/sidebar";
import React from "react";

const ProductsSlideBar = ({ visible, setVisible, prodcuct, sideproducts }) => {
  return (
    <div>
      <div className="card flex justify-content-center">
        <Sidebar
          style={{ width: "50%" }}
          visible={visible}
          position="right"
          onHide={() => setVisible(false)}
        >
          <h5
            style={{
              textAlign: "center",
              background: "#69a342",
              padding: "0.5rem",
              color: "white",
            }}
          >

            Manufacturer Number:{prodcuct?.manufacturerNumber} and Manufature
            Name:{prodcuct?.manufacturerName}
          </h5>
          <div style={{ margin: "2.5rem" }}>
            <span
              style={{
                fontWeight: "bold",
                padding: "25px",
                marginTop: "50px",
              }}
            >
              Item Number: {prodcuct.itemNumber},
            </span>
            <span>
              <span className="startRating">
                {prodcuct.overallRating === "" ? 0 : prodcuct.overallRating} ★
              </span>
              <span style={{ fontWeight: "bold" }}>
                Rating & {prodcuct.noOfReviews} Review
              </span>
            </span>
          </div>

          <div className="main_data px-3 py-3">
            <div>
              <div className="PA_data">
                <p>
                  <b>Product Name:</b>
                </p>
                <p>{prodcuct.productName}</p>
              </div>
              <div className="PA_data">
                <p className="">
                  <b>Product Source:</b>
                </p>
                <p> {prodcuct.productSource}</p>
              </div>
              <div className="PA_data">
                <p className="">
                  <b>Product Url:</b>
                </p>
                <p>

                  <a href="${prodcuct.productUrl}" target="_blank">
                    Show Product
                  </a>
                </p>
              </div>
            </div>

            <Divider layout="vertical" />
            <div>
              <div className="PA_dataTo">
                <p>
                  <b>UOM:</b>
                </p>
                <p>${prodcuct.unitOfMeasurement}</p>
              </div>
              <div className="PA_dataTo">
                <p className="">
                  <b> Description: </b>
                </p>
                <p id="truncate-text" className="truncate-text expandable">

                  ${prodcuct.description}
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <h4>Pricing,Category & Specifictions Details</h4>
            <div className="card">
              <Accordion>
                <AccordionTab header="Pricing">
                  <DataTable
                    value={sideproducts}
                    tableStyle={{ minWidth: "50rem" }}
                  >
                    <Column
                      field="productSource"
                      header="Pricing Source"
                    ></Column>
                    <Column field="pricingDetails" header="Price"></Column>
                    <Column field="currency" header="Currency"></Column>
                    <Column field="lastLoadDate" header="Load Data"></Column>
                    <Column field="unitOfMeasurement" header="UOM"></Column>
                  </DataTable>
                </AccordionTab>
                <AccordionTab header="Category">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "80%",
                    }}
                  >
                    <h5>Category</h5>
                    <h5>Category Value</h5>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "80%",
                    }}
                  >
                    <div style={{ fontWeight: "bold" }}>
                      {prodcuct.main_category && <p>Main Category:</p>}

                      <p>Sub Category:</p>
                      <p>Sub Category1:</p>
                      <p>Sub Category2:</p>
                    </div>
                    <div>
                      {prodcuct.main_category && (
                        <p>{prodcuct.main_category}</p>
                      )}
                      <p>{prodcuct.subCategory}</p>
                      <p>{prodcuct.subCategory1}</p>
                      <p>{prodcuct.subCategory2}</p>
                    </div>
                  </div>
                </AccordionTab>
                <AccordionTab header="Specifications">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "80%",
                    }}
                  >
                    <div>
                      <p>Accessory Type:</p>
                      <p>Weight:</p>
                    </div>
                    <div>
                      <p>{prodcuct.accessoryType}</p>
                      <p>{prodcuct.Weight}</p>
                    </div>
                  </div>
                </AccordionTab>
              </Accordion>
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default ProductsSlideBar;
