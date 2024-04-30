import "../../../style.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import axios from "axios";
import DisplayProducts from "./DisplayProducts";
import ProductsSlideBar from "./ProductsSlideBar";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import DisplayProductsForAdvance from "./DisplayProductsForAdvance";
import SideFilter from "./SideFilter";
import SideFilterForAdv from "./SideFilterForAdv";

const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtersData, setFiltersData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [visible, setVisible] = useState(false);
  const [prodcuct, setProduct] = useState();
  const [sideproducts, setSideProducts] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [serachValue, setSearchValue] = useState(false);
  const [totalCount, SetTotalCount] = useState();
  const [startIndex, setStartIndex] = useState();
  const [endIndex, setEndIndex] = useState();
  const [advanceVisible, setAdvanceVisible] = useState(false);
  const [advanceSeachValue, setAdvanceSearchValue] = useState(false);
  const [advancepageNumber, setAdvancePageNumber] = useState(1);
  const [checkedItems, setCheckedItems] = useState({});

  const [values, setValues] = useState([
    { dropdown1: null, dropdown2: null, input: "" },
  ]);

  const options1 = [
    { name: "manufacturerName", code: "Manufacturer Name" },
    { name: "manufacturerNumber", code: "Manufacturer Number" },
    { name: "product Description", code: "product Description" },
    { name: "product Number", code: "product Number" },
    { name: "itemNumber", code: "itemNumber" },
  ];

  const options2 = [
    { name: "Equals", code: "Equals" },
    { name: "not Equals", code: "not Equals" },
    { name: "contains", code: "contains" },
    { name: "not Contains", code: "not Contains" },
  ];

  const handleAdd = () => {
    if (values.length < 5) {
      setValues([...values, { dropdown1: null, dropdown2: null, input: "" }]);
    }
  };
  const handleChange = (index, key, value) => {
    const updatedValues = [...values];
    updatedValues[index][key] = value;
    setValues(updatedValues);
  };

  const handleRemove = (index) => {
    const updatedValues = [...values];
    updatedValues.splice(index, 1);
    setValues(updatedValues);
  };

  const handleAdavanceSearch = async () => {
    const tem = values.map((item, index) => {
      const dropdown1Value = item.dropdown1 ? item.dropdown1.name : "";
      const dropdown2Value = item.dropdown2 ? item.dropdown2.name : "";
      const inputValue = item.input;
      return {
        dropdown1: dropdown1Value,
        dropdown2: dropdown2Value,
        input1: inputValue,
      };
    });

    try {
      const body = {
        pageNumber: advancepageNumber,
        tem: tem,
        filterData: filtersData.map((filter, index) => ({
          filterKey:
            filter.filterKey.charAt(0).toLowerCase() + filter.filterKey.slice(1),
          filterValues: filter.filterValues.filter(
            (value) => checkedItems[index]?.[value]
          ),
          filterColumn: filter.filterColumn.toLowerCase(),
        })),
      };

      const hasFilterValues = body.filterData.some((filter) => filter.filterValues.length > 0);
  const postBody = {
    pageNumber: advancepageNumber,
    tem: tem,
    filterData: hasFilterValues ? body.filterData :[],

  }
      const response = await axios.post(
        "http://localhost:5001/advSearch",
        postBody
      );
      setSearchResults(response.data.resultsForPage);
      setAdvanceSearchValue(true);

      const startIndex = (advancepageNumber - 1) * 10 + 1;
      const endIndex = Math.min(
        advancepageNumber * 10,
        response.data.totalCount
      );
      console.log(advancepageNumber, "page");
      console.log(startIndex, endIndex, "se");
      setStartIndex(startIndex);
      setEndIndex(endIndex);
      SetTotalCount(response.data.totalCount);
      setTotalPages(Math.ceil(response.data.totalCount / 10));
    } catch (error) {
      console.error("Error:", error);
    }
    setSearchValue(false);
  };
  const handleApply = async () => {
    setSearchValue(false);
   await handleAdavanceSearch();
   await setFiltersData([])
    setAdvanceVisible(false)

    const inputVal = values.map((item, index) => {
      const inputValue = item.input;
      return {
        input: inputValue,
      };
    });

    console.log(inputVal[0].input, "kjoij");

    console.log(inputVal, "joi");

    try {
      const filtersResponse = await axios.get(
        // `http://localhost:5001/searchFilter/${inputVal[0].input}`
        "http://localhost:5001/advsearchFilter/"
      );
      // setFiltersData(filtersResponse.data.filtersData);
      setFiltersData(filtersResponse.data.filtersData.filtersData);
    } catch (error) {
      console.error("Error:", error);
    }
    setSearchTerm([]);
    setAdvancePageNumber(1);
    setAdvanceSearchValue(true)
  };

  const handleBasicSearch = async () => {
    setAdvanceSearchValue(false);
    const body = {
      searchTerm: searchTerm,
      pageNumber: pageNumber,
      filterData: filtersData.map((filter, index) => ({
        filterKey: filter.filterKey.charAt(0).toLowerCase() + filter.filterKey.slice(1),
        filterValues: filter.filterValues.filter((value) => checkedItems[index]?.[value]),
        filterColumn: filter.filterColumn.toLowerCase(),
      })),
    };

    // Check if any filterValues exist in the body.filterData array
    const hasFilterValues = body.filterData.some((filter) => filter.filterValues.length > 0);

    // If filterValues exist, post the modified filterData; otherwise, post the original filtersData array
    const postData = {
      searchTerm: body.searchTerm,
      pageNumber: body.pageNumber,
      filterData: hasFilterValues ? body.filterData :[],
    };
    try {
      const searchResponse = await axios.post(
        "http://localhost:5001/search",
        postData
      );

      setSearchResults(searchResponse.data.resultsForPage);
      SetTotalCount(searchResponse.data.totalCount);
      setTotalPages(Math.ceil(searchResponse.data.totalCount / 10));
      setSearchValue(true);


      const startIndex = (pageNumber - 1) * 10 + 1;
      const endIndex = Math.min(
        pageNumber * 10,
        searchResponse.data.totalCount
      );
      setStartIndex(startIndex);
      setEndIndex(endIndex);
  console.log(startIndex,endIndex,"strt end")

    } catch (error) {
      console.error("Error:", error);
    }

  };


  const handleSearch = async () => {
    if(searchTerm!==""){
    await handleBasicSearch();
    try {
      const filtersResponse = await axios.get(
        `http://localhost:5001/searchFilter/${searchTerm}`
      );
      setFiltersData(filtersResponse.data.filtersData.filtersData);
    } catch (error) {
      console.error("Error:", error);
    }
    setPageNumber(1);
  }
  else{
    alert("Please enter text")
  }
  };

  useEffect(() => {
    if (serachValue && searchTerm) {
      handleBasicSearch();
    }
    if (advanceSeachValue) {
      handleAdavanceSearch();
    }
  }, [pageNumber, advancepageNumber]);


  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div
            className="col-lg-12"
            style={{ justifyContent: "center", textAlign: "center" }}
          >
            <h4>Search Products</h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <InputText
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: "250px" }}
              />
              <Button
                style={{ background: "gray" }}
                onClick={handleSearch}
                className="fa fa-search"
              />
              <Button
                style={{ marginLeft: "3px" }}
                className="btn btn-danger pa-customBtn  custom_button"
                label="Advance Search"
                onClick={() => {
                  setAdvanceVisible(true);
                }}
              ></Button>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-3">
            {serachValue&&(
               <SideFilter
               filtersData={filtersData}
               searchTerm={searchTerm}
               pageNumber={pageNumber}
               setCheckedItems={setCheckedItems}
               checkedItems={checkedItems}
               setSearchResults={setSearchResults}
               setPageNumber={setPageNumber}
               setTotalPages={setTotalPages}
               SetTotalCount={SetTotalCount}
               setSearchValue={setSearchValue}
               setEndIndex={setEndIndex}
               setStartIndex={setStartIndex}
             />
            )}
            {advanceSeachValue &&(
              <SideFilterForAdv
              filtersData={filtersData}
              advancepageNumber={advancepageNumber}
              setAdvanceSearchValue={setAdvanceSearchValue}
              setAdvancePageNumber={setAdvancePageNumber}
              setCheckedItems={setCheckedItems}
              checkedItems={checkedItems}
              setSearchResults={setSearchResults}
              setTotalPages={setTotalPages}
              SetTotalCount={SetTotalCount}
              setSearchValue={setSearchValue}
              setEndIndex={setEndIndex}
              setStartIndex={setStartIndex}
              values={values}
              />
            )}


          </div>

          {/* parent div */}
          <div className="col-lg-9 ">
            {serachValue && (
              <DisplayProducts
                searchResults={searchResults}
                setProduct={setProduct}
                setVisible={setVisible}
                setSideProducts={setSideProducts}
                totalPages={totalPages}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                totalCount={totalCount}
                startIndex={startIndex}
                endIndex={endIndex}
              />
            )}
            {advanceSeachValue && (
              <DisplayProductsForAdvance
                searchResults={searchResults}
                setProduct={setProduct}
                setVisible={setVisible}
                setSideProducts={setSideProducts}
                totalPages={totalPages}
                totalCount={totalCount}
                startIndex={startIndex}
                endIndex={endIndex}
                setAdvanceSearchValue={setAdvanceSearchValue}
                setAdvancePageNumber={setAdvancePageNumber}
                advancepageNumber={advancepageNumber}
              />
            )}
          </div>

          {advanceVisible && (
            <div>
              <Dialog
                header="Advance Search Products"
                visible={advanceVisible}
                style={{ width: "50vw", textAlign: "center" }}
                onHide={() => setAdvanceVisible(false)}
              >
                {values.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      gap: "5px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Dropdown
                      options={options1}
                      placeholder="Select Option 1"
                      value={item.dropdown1}
                      onChange={(e) =>
                        handleChange(index, "dropdown1", e.value)
                      }
                      optionLabel="name"
                      style={{ width: "200px", gap: "5px" }}
                      disabled={item.dropdown1 && item.dropdown1.disabled}
                    />

                    <Dropdown
                      options={options2}
                      placeholder="Select Option 2"
                      value={item.dropdown2}
                      onChange={(e) =>
                        handleChange(index, "dropdown2", e.value)
                      }
                      optionLabel="name"
                      style={{ width: "150px", gap: "5px", margin: "0.1rem" }}
                    />
                    <InputText
                      value={item.input}
                      onChange={(e) =>
                        handleChange(index, "input", e.target.value)
                      }
                    />
                    {index === 0 ? (
                      <Button
                        icon="pi pi-plus-circle"
                        onClick={handleAdd}
                        className="btn btn-danger pa-customBtn  custom_button"
                      />
                    ) : (
                      <Button
                        icon="pi pi-times-circle"
                        onClick={() => handleRemove(index)}
                        className="btn btn-danger pa-customBtn  custom_button"
                      />
                    )}
                  </div>
                ))}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                    marginTop: "200px",
                  }}
                >
                  <div>
                    <Button
                      label="Close"
                      className="btn btn-danger pa-customBtn  custom_button"
                      onClick={(e)=>setAdvanceVisible(false)}
                    ></Button>
                  </div>
                  <div>
                    <Button
                      onClick={handleApply}
                      label="Apply"
                      className="btn btn-danger pa-customBtn  custom_button"
                    ></Button>
                  </div>
                </div>
              </Dialog>
            </div>
          )}

          {visible && (
            <div className="card flex justify-content-center">
              <ProductsSlideBar
                visible={visible}
                setVisible={setVisible}
                prodcuct={prodcuct}
                sideproducts={sideproducts}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchProducts;
