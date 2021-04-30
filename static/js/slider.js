$(document).ready(function () {
    console.log("READY!");
    console.log("READY!");
    console.log("READY!");
    console.log("READY!");
    console.log("READY!");
    console.log("READY!");


    // const slider = $("#customRange1")[0].change(function(){
    //     alert("The text has been changed.");
    //   });



    // console.log("slider: ", slider);

    // const getRange = function () {
    //     console.log("HERE")
    // }

    // slider.change(getRange())

    // initialize the data
    function buildDropdownOptions() {
        console.log("BUILD DROP DOWN RUNNING")
        // select the dropdown from DOM
        const dropdownMenu = d3.select("#selDataset");

        const years = ["2006", "2007", "2008", "2009", "2010"]

        years.forEach((year) => {
            console.log("YEAR", year)
            dropdownMenu.append('option').text(year).property('value', year);
        });

        // promise pending
        // const selectID = subjectID[0];

        const initialYear = years[0];

        // buildPlot(initialYear);
        // updateMetadata(initialYear);
        // console.log(subjectID);

    }

    function optionChanged(selectNew) {
        updateMetadata(selectNew);
        buildPlot(selectNew);
    }

    buildDropdownOptions()
});