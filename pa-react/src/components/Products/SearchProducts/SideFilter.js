import axios from "axios";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

const SideFilter = ({
  filtersData,
  searchTerm,
  pageNumber,
  checkedItems,
  setCheckedItems,
  setSearchResults,
  setPageNumber,
  setTotalPages,
  SetTotalCount,
  setStartIndex,
  setEndIndex,
  setSearchValue
}) => {
  const [filterText, setFilterText] = useState({});
  const [showOptions, setShowOptions] = useState(true);

  const toggleOptions = (index) => {
    setShowOptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleCheckboxChange = (filterIndex, valueIndex) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [filterIndex]: {
        ...prevState[filterIndex],
        [valueIndex]: !prevState[filterIndex]?.[valueIndex],
      },
    }));
  };

  const handleFilterChange = (filterIndex, value) => {
    setFilterText((prevState) => ({
      ...prevState,
      [filterIndex]: value,
    }));
  };

  const filterValues = (values, filterText) => {
    if (!filterText) return values; // Return all values if filterText is undefined or empty

    const filteredValues = values.filter((value) =>
      value.toLowerCase().includes(filterText.toLowerCase())
    );
    // console.log('Filtered values:', filteredValues); // Log filtered values to the console
    return filteredValues;
  };

  const handlePost = async () => {
    setSearchResults([]);
    const body = {
      searchTerm: searchTerm,
      pageNumber: pageNumber,
      filterData: filtersData.map((filter, index) => ({
        filterKey:
          filter.filterKey.charAt(0).toLowerCase() + filter.filterKey.slice(1),
        filterValues: filter.filterValues.filter(
          (value) => checkedItems[index]?.[value]
        ),
        filterColumn: filter.filterColumn.toLowerCase(),
      })),
    };

    console.log(body, "afdas");

    const response = await axios.post("http://localhost:5001/search", body)
    setSearchResults(response.data.resultsForPage)
    console.log(response.data.resultsForPage,"sdsa")
    SetTotalCount(response.data.totalCount);
    setTotalPages(Math.ceil(response.data.totalCount / 10));



    const startIndex = (pageNumber - 1) * 10 + 1;
    const endIndex = Math.min(
      pageNumber * 10,
      response.data.totalCount
    );
    setStartIndex(startIndex);
    setEndIndex(endIndex);
     setPageNumber(1)

  };

  const handleReset = () => {
    setCheckedItems("");
  };

  return (
    <div>
      {filtersData && filtersData.length > 0 ? (
        <div className="border-bottom my-4 py-3 sidebar_sec">
          <h6>Filters by Search</h6>
          {filtersData.map((filter, index) => (
            <div key={index} className="border-bottom my-4 py-3 sidebar_sec">
              <div onClick={() => toggleOptions(index)}>
                <i
                  className={`fa fa-chevron-${
                    showOptions[index] ? "down" : "right"
                  }`}
                />{" "}
                {filter.filterColumn}
              </div>
              <InputText
                className="p-inputtext-sm"
                value={filterText[index] || ""}
                onChange={(e) => handleFilterChange(index, e.target.value)}
              />
              {showOptions[index] && (
                <div>
                  <form className="pt-2 pa_sidebar">
                    {filterValues(filter.filterValues, filterText[index]).map(
                      (value, i) => (
                        <div
                          key={i}
                          className="custom-control custom-checkbox d-flex align-items-center mb-3"
                        >
                          <Checkbox
                            inputId={`filter-${index}-${i}`}
                            value={value}
                            checked={checkedItems[index]?.[value] || false}
                            onChange={() => handleCheckboxChange(index, value)}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={`filter-${index}-${i}`}
                          >
                            {value}
                          </label>
                        </div>
                      )
                    )}
                  </form>
                </div>
              )}
            </div>
          ))}
          <div
            style={{
              display: "flex",
              gap: "5px",
              justifyContent: "flex-end",
            }}
          >
            <div>
              <Button
                className="btn btn-outline-success pa-customBtn-sm"
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
            <div>
              <Button
                className="btn btn-outline-success pa-customBtn-sm"
                onClick={handlePost}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SideFilter;
