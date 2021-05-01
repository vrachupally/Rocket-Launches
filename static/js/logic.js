var url = "http://127.0.0.1:5000/api/v1.0/launch_data"
// create array for years in success and failure launches 
var success = {
    2006: 0,
    2007: 0,
    2008: 0,
    2009: 0,
    2010: 0,
    2011: 0,
    2012: 0,
    2013: 0,
    2014: 0,
    2015: 0,
    2016: 0,
    2017: 0,
    2018: 0,
    2019: 0,
    2020: 0
};

var failure = {
    2006: 0,
    2007: 0,
    2008: 0,
    2009: 0,
    2010: 0,
    2011: 0,
    2012: 0,
    2013: 0,
    2014: 0,
    2015: 0,
    2016: 0,
    2017: 0,
    2018: 0,
    2019: 0,
    2020: 0
};

// make empty arrays for data to be entered 
let successYears = {}
let failYears = {}
let Satellite = 0;
let Dragon = 0;
let filteredSatellite = 0;
let filteredDragon = 0;
// let filteredData = []
let barLabels = []
let barValues = []

//creating line chart with chart.js 

var lineChart = document.getElementById("lineChart").getContext('2d')
myLineChart = new Chart(lineChart, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Successful Launches',
            fill: false,
            data: [],
            backgroundColor: '#1593ba',
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000000'
        }, {
            label: 'Failed Launches',
            fill: false,
            data: [],
            backgroundColor: '#d8c293',
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000000'
        }]
    },
    options: {
        title: {
            display: false,
            text: 'Mission Type',
            fontSize: 25
        },
        tooltips: {
            displayColors: false,

        }
    }

})
// create doughnut chart with chart.js
var doughnutChart = document.getElementById("doughnutChart").getContext('2d')
var myDoughnutChart = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['Satellite', 'Dragon'],
        datasets: [{
            label: 'Payload Type',
            data: [],
            backgroundColor: ['#36bff5', '#7bdab4'],
            tooltip_line1: ['SpaceX has launched a number of satellites for both', 'Dragon spacecrafts are capable of carrying humans'],
            tooltip_line2: ['governmental space agencies and private corporations.', 'and cargo to and from orbit and beyond.'],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Mission Type',
            fontSize: 25
        },
        tooltips: {
            displayColors: false,
            callbacks: {
                title: function (tooltipItem, data) {
                    return data['labels'][tooltipItem[0]['index']];
                },
                beforeLabel: function (tooltipItem, data) {
                    // var dataset = data['datasets'][0];
                    // var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                    return data['datasets'][0]['data'][tooltipItem['index']]
                },
                label: function (tooltipItem, data) {
                    return data['datasets'][0]['tooltip_line1'][tooltipItem['index']];
                },
                afterLabel: function (tooltipItem, data) {
                    return data['datasets'][0]['tooltip_line2'][tooltipItem['index']];
                }
            }
        }
    }

});

// create fucntion to initialize line chart 
function initializeLineChart() {
    myLineChart.data.labels = Object.keys(success);
    myLineChart.data.datasets[0].data = Object.values(success);
    myLineChart.data.datasets[1].data = Object.values(failure)
    myLineChart.update()
}
// create function to clear line chart data 
function removeLineChartData() {
    myLineChart.data.labels = []
    myLineChart.data.datasets[0].data = []
    myLineChart.data.datasets[1].data = []
    myLineChart.update();
}
// creat efunction to update line chart with 
function updateLineChart() {
    myLineChart.data.labels = Object.keys(successYears);
    myLineChart.data.datasets[0].data = Object.values(successYears)
    myLineChart.data.datasets[1].data = Object.values(failYears)
    myLineChart.update();
}

function initializeDoughnutChart() {
    myDoughnutChart.data.datasets[0].data = [Satellite, Dragon];
    myDoughnutChart.update();
}


// pull in the launch_data from the flask api
d3.json(url).then(function (launch_data) {
    // console to check if working 
    // console.log("THE DATA: ", launch_data)
    // clean the data create new const
    const scrubbedData = launch_data.filter((launch) => { return launch.launch_success === true || launch.launch_success === false })
    // create new vars for successful launches and failures 
    const successfulLaunches = scrubbedData.filter((launch) => { return launch.launch_success === true })
    const failedLaunches = scrubbedData.filter((launch) => { return launch.launch_success === false })
    
    //go through data and add every succesful launch on proper year 
    successfulLaunches.forEach((launch) => {
        success[`${launch.launch_year}`] += 1;
    })

    //go through data and add every succesful launch on proper year 
    failedLaunches.forEach((launch) => {
        failure[`${launch.launch_year}`] += 1;
    })
    // console to check 
    // console.log("SUCCESS OBJ: ", success)

    // console.log("FAILURE OBJ: ", failure)

    const satelliteLaunches = launch_data.filter((launch) => { return launch.Payload_type === 'Satellite' })
    const dragonLaunches = launch_data.filter((launch) => { return launch.Payload_type === 'Dragon' })
    satelliteLaunches.forEach((launch) => {
        Satellite[`${launch.Payload_type}`] += 1;
    })
    dragonLaunches.forEach((launch) => {
        Dragon[`${launch.Payload_type}`] += 1;
    })

    // for loop , to loop through data add 1 to empty array 
    for (var i = 0; i < launch_data.length; i++) {
        if (launch_data[i].Payload_type === 'Satellite') {
            Satellite += 1;
        }
        else {
            Dragon += 1
        }
    }
    // console.log("Satellite: " + Satellite);
    // console.log("Dragon: " + Dragon);

    // loop to create nationality data 
    var nationality = new Set(launch_data.map(e => e.Nationality));
    console.log(nationality)
    function getItems(input) {
        var arr = input, obj = {};
        for (var i = 0; i < arr.length; i++) {
            if (!obj[arr[i].Nationality]) {
                obj[arr[i].Nationality] = 1;
            } else if (obj[arr[i].Nationality]) {
                obj[arr[i].Nationality] += 1;
            }
        }
        return obj;
    };
    var nationalities = getItems(launch_data);
    console.log(nationalities)
    // create bar chart with different nationality data 
    var barChart = document.getElementById("barChart").getContext('2d')
    myBarChart = new Chart(barChart, {
        type: 'bar',
        data: {
            labels: Object.keys(nationalities),
            datasets: [{
                label: 'SpaceX Customers',
                data: Object.values(nationalities),
                backgroundColor: 'blue',
                borderWidth: 1,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000000'
            }]
        },
        options: {
            title: {
                display: false,
            },
            tooltips: {
                displayColors: false,

            }
        }

    });



    // initialize line and doughnut chart 
    initializeLineChart()
    initializeDoughnutChart()
    // initializeBarChart()
});

// new function 
function handleYearRange() {

    // console.log("I have been clicked")
    // console.log(beginYear, endYear)

    // Create new object for succesful launches that fall in range
    Object.keys(success).map((year) => {
        console.log(year)

        const inRange = beginYear > year && endYear < year;

        if (year >= beginYear && year <= endYear) {
            successYears[`${year}`] = success[`${year}`]
        } else {
            return;
        };

        // console.log('successYears:', successYears)
    })

    // Create new object for failed launches that fall in range
    Object.keys(failure).map((year) => {
        // console.log(year)

        const inRange = beginYear > year && endYear < year;

        if (year >= beginYear && year <= endYear) {
            failYears[`${year}`] = failure[`${year}`]
        } else {
            return;
        };

        // console.log('failYears:', failYears)
    })
    // remove default line chart and update new chart with range data
    removeLineChartData()
    updateLineChart()

}
