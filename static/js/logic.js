var url = "http://127.0.0.1:5000/api/v1.0/launch_data"
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


var url = "http://127.0.0.1:5000/api/v1.0/launch_data"

var Satellite = 0;
var Dragon = 0;

// var bar_data = {
//     year: [],
//     number_of_launches: []
// };
var year = []

var url = "http://127.0.0.1:5000/api/v1.0/launch_data"

d3.json(url).then(function (launch_data) {
    console.log("THE DATA: ", launch_data)
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
    console.log(nationalities);

    console.log("Launch Data: ", launch_data)

    // for each row 

    const scrubbedData = launch_data.filter((launch) => { return launch.launch_success === true || launch.launch_success === false })

    const successfulLaunches = scrubbedData.filter((launch) => { return launch.launch_success === true })
    const failedLaunches = scrubbedData.filter((launch) => { return launch.launch_success === false })

    successfulLaunches.forEach((launch) => {
        success[`${launch.launch_year}`] += 1;
    })

    failedLaunches.forEach((launch) => {
        failure[`${launch.launch_year}`] += 1;
    })

    console.log("SUCCESS OBJ: ", success)

    console.log("FAILURE OBJ: ", failure)




    for (var i = 0; i < launch_data.length; i++) {
        if (launch_data[i].Payload_type === 'Satellite') {
            Satellite += 1
        }
        else {
            Dragon += 1
        }
        // loop through data. count number of lauches for each year. take the year and if it's unique, push it to the year array. then we want to add 1 to the number of launch
        year.push(launch_data[i].launch_year)
    }

    console.log(launch_data)
    console.log(year)
    // Bar chart from chart.js tutorial

    var donut = document.getElementById("myChart").getContext('2d')

    // Chart.defaults.global.defaultFontSize = 18;

    var donutChart = new Chart(donut, {
        type: 'doughnut',
        data: {
            labels: ['Satellite', 'Dragon'],
            datasets: [{
                label: 'Payload Type',
                data: [Satellite, Dragon],
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
                        //     var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                        //     return data['datasets'][0]['data'][tooltipItem['index']]+' (' + percent + '%)';
                    },
                    beforeLabel: function (tooltipItem, data) {
                        var dataset = data['datasets'][0];
                        var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                        return data['datasets'][0]['data'][tooltipItem['index']] + ' (' + percent + '%)';
                        // return data['datasets'][0]['data'][tooltipItem['index']];
                        // console.log(data);
                        // return data['datasets'][0]['tooltip_content'][tooltipItem['index']];
                    },
                    label: function (tooltipItem, data) {
                        // var dataset = data['datasets'][0];
                        // var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                        // return '(' + percent + '%)';
                        return data['datasets'][0]['tooltip_line1'][tooltipItem['index']];
                    },
                    afterLabel: function (tooltipItem, data) {
                        return data['datasets'][0]['tooltip_line2'][tooltipItem['index']];
                    }
                }
            }
        }

    });

    // updateConfigAsNewObject(donutChart);
    // updateConfigByMutating(donutChart);

    var lineChart = document.getElementById("lineChart").getContext('2d')

    // Needs to pass filted years after the launch button is presssed

    // User selects begin year
    // store var
    // User selects end year
    // store var
    // User presses launch button 
    // take both stored vars and filter the data for everythign between those years "inclsive"
    // Re render graph

    new Chart(lineChart, {
        type: 'line',
        data: {
            labels: Object.keys(success),
            datasets: [{
                label: 'Successful Launches',
                data: Object.values(success),
                backgroundColor: '#1593ba',
                borderWidth: 1,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000000'
            }, {
                label: 'Failed Launches',
                data: Object.values(failure),
                backgroundColor: '#d8c293',
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

            }
        }

    });

    var bar = document.getElementById("barChart").getContext('2d')

    new Chart(bar, {
        type: 'bar',
        data: {
            labels: Object.keys(nationalities),
            datasets: [{
                label: 'SpaceX Customers',
                data: Object.values(nationalities),
                backgroundColor: '#07243c',
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

            }
        }

    });

});


function handleYearRange() {
    console.log("I have been clicked")
    console.log(beginYear, endYear)

    // let successYears = {
    //     2007: 0,
    //     2008: 0,
    //     2009: 0,
    //     2010: 0,
    //     2011: 0,
    //     2012: 0,
    //     2013: 0,
    //     2014: 0,
    //     2015: 0,
    // };

    let successYears = {}

    // ["2007" - "2015"]
    Object.keys(success).map((year) => {
        console.log(year)

        // beginYear = 2007
        // endYear = 2015

        // current iteration year = 2007
        console.log("beginYear > year", beginYear > year)
        console.log("endYear <  year", endYear < year)
        console.log("beginYear > year && endYear <  year", beginYear > year && endYear < year)

        
        const inRange = beginYear > year && endYear < year;

        // 

        if(year >= beginYear && year <= endYear) {
            successYears[`${year}`] = success[`${year}`]
        } else {
            return; 
        };
         

        // if (inRange) {
        //     console.log("IS IN RANGE: ", year)
        //     return;
        // } else {
        //     // { 2007: whatever is already in success["2007"] }

        //     successYears[`${year}`] = success[`${year}`]

        // }


    })

    console.log("SUCCESS YEAR: ", successYears)

    const lineChart = document.getElementById("lineChart").getContext('2d')


    new Chart(lineChart, {
        type: 'line',
        data: {
            labels: Object.keys(success),
            datasets: [{
                label: 'Successful Launches',
                data: Object.values(success),
                backgroundColor: '#1593ba',
                borderWidth: 1,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000000'
            }, {
                label: 'Failed Launches',
                data: Object.values(failure),
                backgroundColor: '#d8c293',
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

            }
        }

    });

    console.log(lineChart)
}