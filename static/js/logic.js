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

    var ctx = document.getElementById("myChart").getContext('2d')

    // Chart.defaults.global.defaultFontSize = 18;
    
    var chartx = new Chart(ctx, {
        type: '',
        data: {
            labels: ['Satellite', 'Dragon'],
            datasets: [{
                label: 'Payload Type',
                data: [Satellite, Dragon],
                backgroundColor: ['blue', 'orange'],
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

    updateConfigAsNewObject(chartx);
    updateConfigByMutating(chartx);

});

function updateConfigByMutating(chart) {
    chart.options.plugins.title.text = 'new title';
    chart.update();
}

function updateConfigAsNewObject(chart) {
    chart.options = {
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
                    var dataset = data['datasets'][0];
                    var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                    return data['datasets'][0]['data'][tooltipItem['index']] + ' (' + percent + '%)';
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
    chart.update();
}

var ctx = document.getElementById("myChart2").getContext('2d')
var chartx = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: year,
        datasets: [{
            
            data: year,
            backgroundColor: ['blue'],
            tooltip_line1: ['SpaceX has launched a number of satellites for both', 'Dragon spacecrafts are capable of carrying humans'],
            tooltip_line2: ['governmental space agencies and private corporations.', 'and cargo to and from orbit and beyond.'],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000000'
        }]
    }
});

