var express = require('express');
var path = require('path');
var i18n=require("i18n-express"); 
var app = express();

app.use(express.static('public'));
app.get('/es', function (req, res) {
   res.sendFile( __dirname + "/" + "index_es.html" );
});
app.get('/en', function (req, res) {
   res.sendFile( __dirname + "/" + "index_en.html" );
});
app.get('/fr', function (req, res) {
   res.sendFile( __dirname + "/" + "index_fr.html" );
});
app.get('', function (req, res) {
   res.sendFile( __dirname + "/" + "index_es.html" );
});




app.use(i18n({
   translationsPath: path.join(__dirname, 'i18n'), // <--- use here. Specify translations files path.
   siteLangs: ["en","es"],
   textsVarName: 'translation'
 }));

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})