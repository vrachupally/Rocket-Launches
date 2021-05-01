$(document).ready(function () {
    console.log("READY!");

    // initialize the data
    function buildDropdownOptions() {
        console.log("BUILD DROP DOWN RUNNING")
        // select the dropdown from DOM
        const beginYearDropDown = d3.select("#beginYear");
        const endYearDropDown = d3.select("#endYear");

        const years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"]

        years.forEach((year) => {
            console.log("YEAR", year)

            beginYearDropDown.append('option').text(year).property('value', year);

            endYearDropDown.append('option').text(year).property('value', year).property("selected", year);
        });

    }
    buildDropdownOptions()
});

// set default years 
let beginYear = 2006;
let endYear = 2020;

// function to save the begin year dropdown year selected 
function handleBeginYear(value) {
    console.log("Begin Year: ", value)
    beginYear = value;

}

// function to save  the end year dropdown year  selected 
function handleEndYear(value) {
    console.log("End Year: ", value)
    endYear = value;
}
