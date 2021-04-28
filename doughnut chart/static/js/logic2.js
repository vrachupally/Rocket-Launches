var url = "http://127.0.0.1:5000/api/v1.0/launch_data"
// var payload = []
var Satellite = 0;
var Dragon = 0;
// launch_data = d3.json(url).then(function(launch_data){
//     for (var i = 0; i<launch_data.length; i++) {
//         payload.push(launch_data[i].Payload_type);
//     }
// });
// console.log(payload);

d3.json(url).then(function (launch_data) {
    for (var i = 0; i < launch_data.length; i++) {
        if (launch_data[i].Payload_type === 'Satellite') {
            Satellite += 1
        }
        else {
            Dragon += 1
        }
    }
    console.log("Satellite: " + Satellite);
    console.log("Dragon: " + Dragon);

});

    // console.log("Satellite: " + Satellite);
    // console.log("Dragon: " + Dragon);

    // var Satellite = 0;
    // var Dragon = 0;
    // for (var i = 0; i<payload.length; i++) {
    //     if (payload[i]=== "Satellite") {
    //         Satellite+= 1
    //     }
    //     else {
    //         Dragon+=1
    //     };

    // };
    // console.log("Satellite: " + Satellite)
    // console.log("Dragon: " + Dragon);


    // var ctx = document.getElementById("myChart").getContext('2d')

    // var chart = new Chart(ctx, {
    //     type:'bar',
    //     data: {
    //         // labels: ['boston', 'worcester', 'springfield', 'lowell', 'cambridge', 'new bedford'],
    //         labels: payload,
    //         datasets: [{
    //             label: 'Population',
    //             data: payload
    //         }]
    //     },
    // });


    // Bar chart from chart.js tutorial

    var ctx = document.getElementById("myChart2").getContext('2d')

    // Chart.defaults.global.defaultFontSize = 18;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Satellite', 'Dragon'],
            datasets: [{
                label: 'Payload Type',
                data: [
                    83,
                    28
                ],
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

