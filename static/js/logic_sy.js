var url = "http://127.0.0.1:5000/api/v1.0/launch_data"
console.log("url", url);

d3.json(url).then(function(data) {
    console.log(data);
    for var

    var trace1 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
        type: 'bar'
      };
      
      var trace2 = {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [12, 18, 29],
        name: 'LA Zoo',
        type: 'bar'
      };
      
      var data = [trace1, trace2];
      
      var layout = {barmode: 'stack'};
      
      Plotly.newPlot('myDiv', data, layout);

    });