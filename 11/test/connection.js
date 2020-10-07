const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoosedb');

mongoose.connection
.once('open', function(){
    console.log('Connection has been made');
}).on('error', function(error){
    console.log('Connect error: ' + error);
});