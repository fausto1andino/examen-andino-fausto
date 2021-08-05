const express = require('express');
const app = express();
var hbs = require('hbs');
require('./hbs/helper');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
hbs.registerHelper('helper_name', function (options) { return 'helper value'; });
hbs.registerPartial('partial_name', 'partial value');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'hbs');


 app.get('/', (req, res)=>{
    res.render('home');

 });



app.listen(port,()=>{
   console.log('Escuchando en el puerto ');
 })


