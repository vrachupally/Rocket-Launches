var url = "http://127.0.0.1:5000/api/v1.0/launch_data"
console.log("url", url);

d3.json(url).then(function(data) {
    // console.log(data);


   // initialize the data
function init(){
    // populate the dropdown
    // var dropdownMenu = d3.select("#selDataset");#slider-range
    var sliderMenu = d3.select("#slider-range");
   // Fetch the JSON data
    d3.json("app.py").then((data) =>{  
        launchData = data;
        var yearData = launch_year;
        yearData.forEach((ID) => {
            sliderMenu.append('option').text(ID).property('value', ID);
        });
         // promise pending
        const selectID = subjectID[0];
        buildPlot(selectID);
        updateMetadata(selectID);
        // console.log(subjectID);
    });
} 