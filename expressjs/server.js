const express = require('express');
const app = express();
const jsonData = require('./data.json');
const cors = require('cors');

app.use(express.json())
app.use(cors());

app.options('/search', cors());



let  filterResults; // Define a variable to store filter results
let  advFilterResults;

app.get('/',(req,res)=>{
    res.send("hello world become fullstack")
});




//basic search and used after every basic filter apply
app.post('/search', (req, res) => {
    const searchTerm = req.body.searchTerm.toLowerCase();
    const pageNumber = req.body.pageNumber || 1;
    const itemsPerPage = 10;
    const filterData = req.body.filterData;

    const filteredResults = jsonData.data.filter(item => {
        const searchTermMatch = Object.values(item).some(value =>
            value && value.toString().toLowerCase().includes(searchTerm)
        );
        const filterMatch = filterData?filterData.every(filter => {
            const filterKey = filter.filterKey;
            // console.log(filterKey,"key")
            const filterValues = filter.filterValues.map(value =>
                value.toLowerCase());
            return filterValues.includes(item[filterKey]?.toLowerCase());
        }):true;
        return  searchTermMatch && filterMatch;
    });

    filterResults = filteredResults

    // Determine total count and results for the current page
    const totalCount = filteredResults.length;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = Math.min(pageNumber * itemsPerPage, totalCount);
    const resultsForPage = filteredResults.slice(startIndex, endIndex);

    // Send the filtered results and total count in the response
    res.json({ resultsForPage, totalCount });
});




const transformDataToFilters = (data, filterKeys) => {
    const filtersData = filterKeys.map((key) => {
      const filterValues = [...new Set(data.map((item) => item[key]))];
      return {
        filterKey: key.charAt(0).toUpperCase() + key.slice(1),
        filterValues,
        filterColumn: key.charAt(0).toUpperCase() + key.slice(1),
      };
    });

    console.log(filtersData,"filter")

    return { filtersData };
  };

app.get('/searchFilter/:searchTerm',  async (req, res) => {
    const searchTerm = req.params.searchTerm.toLowerCase();

    const dummyFilterKeys = ["supplier", "mainCategory"];
    const dummyFiltersData = await filterResults ? transformDataToFilters(filterResults, dummyFilterKeys) : [];

    res.json({ filtersData: dummyFiltersData });
});


app.post('/advsearch', (req, res) => {
    const { tem } = req.body;
    const pageNumber = req.body.pageNumber || 1; // Default to page 1 if not provided
    const itemsPerPage = 10;
    const filterData = req.body.filterData;


//     tem.forEach((entry) => {
//         filteredResults = jsonData.data.filter((item) => {
//             if (entry.dropdown2 === 'Equals') {
//                 return item[entry.dropdown1] === entry.input1;
//             } else if (entry.dropdown2 === 'not Equals') {
//                 return item[entry.dropdown1] !== entry.input1;
//             } else if (entry.dropdown2 === 'contains') {
//                 return item[entry.dropdown1].includes(entry.input1);
//             } else if (entry.dropdown2 === 'not Contains') {
//                 return !item[entry.dropdown1].includes(entry.input1);
//             }
//         });
//     }
// );

const filteredResults = jsonData.data.filter((item) => {
    // Apply first set of conditions (from tem)
    const oneVariable = tem.some((entry) => {
        if (entry.dropdown2 === 'Equals') {
            return item[entry.dropdown1] === entry.input1;
        } else if (entry.dropdown2 === 'not Equals') {
            return item[entry.dropdown1] !== entry.input1;
        } else if (entry.dropdown2 === 'contains') {
            return item[entry.dropdown1].includes(entry.input1);
        } else if (entry.dropdown2 === 'not Contains') {
            return !item[entry.dropdown1].includes(entry.input1);
        }
    });

    // Apply second set of conditions (from filterData)
    const twoVariable = filterData ? filterData.every(filter => {
        const filterKey = filter.filterKey;
        const filterValues = filter.filterValues.map(value =>
            value.toLowerCase());
        return filterValues.includes(item[filterKey]?.toLowerCase());
    }) : true;

    // Include item if it satisfies both sets of conditions
    return oneVariable && twoVariable;
});

    const totalCount = filteredResults.length;

    advFilterResults = filteredResults

    // console.log(advFilterResults,"advFilterResults")


    const startIndex = (pageNumber - 1) * itemsPerPage ;
    const endIndex = Math.min(pageNumber * itemsPerPage, totalCount);

    const resultsForPage = filteredResults.slice(startIndex, endIndex);

    res.json({ resultsForPage,totalCount });
});



app.get('/advsearchFilter/',  async (req, res) => {
    // const searchTerm = req.params.searchTerm.toLowerCase();

    // console.log(advFilterResults,"adv")

    const dummyFilterKeys = ["supplier", "mainCategory"];
    const dummyFiltersData = await advFilterResults ? transformDataToFilters(advFilterResults, dummyFilterKeys) : [];

    res.json({ filtersData: dummyFiltersData });
});


































app.listen(5001,()=>{
    console.log("server running")
})


