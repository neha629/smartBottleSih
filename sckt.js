var dgram = require('dgram');

var client = dgram.createSocket('udp4');


var port = 44044;

client.on('message', function (msg, info){
    console.log(msg.toString());
    console.log(msg);
    console.log(info);
 });

client.on('listening', function(){
    var address = client.address();
    console.log("listening on :" + address.address + ":" + address.port);
});

client.bind(port);

// client.send('H',0, 12, 4220, '192.168.43.213');
client.send('o',0, 12, 4220, '192.168.43.213');
client.send('c',0, 12,  4220, '192.168.43.213', function(err, bytes) {
    console.log("Closing connection");
    // client.close();
});
