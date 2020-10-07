// var all = require('./count');

// console.log(all.counter(["apple", "mongo", "grapes"]));
// // console.log(all.adder(1, 2));
// // console.log(all.pi)
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + './readMe.txt');

myReadStream.on('data', function(chunk){
    console.log("NEW CHUNK RECEIVED: ")
    console.log(chunk)
})