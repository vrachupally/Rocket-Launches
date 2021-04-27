var url = "http://127.0.0.1:5000//api/v1.0/launch_data"
// var payload = []
var Satellite = 0;
var Dragon = 0;
// launch_data = d3.json(url).then(function(launch_data){
//     for (var i = 0; i<launch_data.length; i++) {
//         payload.push(launch_data[i].Payload_type);
//     }
// });
// console.log(payload);

d3.json(url).then(function(launch_data){
    for (var i = 0; i<launch_data.length; i++) {
        if (launch_data[i].Payload_type === 0) {
            Satellite += 1
        }
        else {
            Dragon += 1
        }
    }
});
console.log("Satellite: " + Satellite);
console.log("Dragon: "+ Dragon);

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
console.log("Satellite: "+Satellite)
console.log("Dragon: "+Dragon);


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

var ctx = document.getElementById("myChart").getContext('2d')

Chart.defaults.global.defaultFontSize = 18;

var chart = new Chart(ctx, {
    type:'doughnut',
    data: {
        labels: ['Satellite', 'Dragon'],
        datasets: [{
            label: 'Payload Type',
            data: [
            60,
            51,  
            ],
            backgroundColor: ['blue', 'orange'],
            tooltip_content: ['SpaceX has launched a number of satellites for both governmental space agencies and private corporations.', 'Dragon spacecrafts are capable of carrying humans and cargo to and from orbit and beyond.'],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000000'
        }]
    },
    options: {
        title:{
            display:true,
            text: 'Mission Type',
            fontSize: 25
        },
        tooltips: {
            callbacks: {
              title: function(tooltipItem, data) {
                return data['labels'][tooltipItem[0]['index']];
              },
              label: function(tooltipItem, data) {
                return data['datasets'][0]['data'][tooltipItem['index']];
              },
              afterLabel: function(tooltipItem, data) {
                var dataset = data['datasets'][0];
                var percent = Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                return '(' + percent + '%)';
              },
              afterAfterLabel: function(tooltipItem, data) {
                  return data['datasets'][0]['tooltip_content'][tooltipItem['index']];
              }
            }
        }
    }

});

$("myChart").click(
    function(event){
        var activepoints = myChart.getElementAtEvent(event);
        if(activepoints.length>0){
            alert("yes!")
        }
        else{
            alert("no")
        }
    }
)

