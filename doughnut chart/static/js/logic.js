var url = "http://127.0.0.1:5000//api/v1.0/launch_data"
var data = []
launch_data = d3.json(url).then(function(launch_data){
    for (var i = 0; i<launch_data.length; i++) {
        data.push(launch_data[i].Payload_type);
    }
});
console.log(data)
