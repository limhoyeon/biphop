require('dotenv').config()
var mongoose = require('mongoose');
mongoose.connect(process.env.NOSQL_URL, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    var kittySchema = new mongoose.Schema({
        name: String
    });
    var Kitten = mongoose.model('Citten', kittySchema);
    var Silence = new Kitten({name : "Silence"});
    console.log(Silence)
    Silence.save()
    .then((status)=>{
        console.log(status)
    })
    .catch((err)=>{
        console.log(err)
    })
});
