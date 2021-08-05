const hbs = require('hbs');

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./data/datas.json','utf8'));

hbs.registerHelper('getInsumos',function(){
    var insu="";
    obj.forEach (objs => {
       
        insu += '<div class="p-2 w-25 h-25">';
        insu += '<img src= "'+objs.url+'" class="img-thumbnail border-3 border-secondary">';
        insu += '<p class="fw-bold" >'+objs.insumo+'</p>';
        insu += '<p >'+objs.costo+'$</p>';
        insu += '</div>';
        
    });
    return new hbs.SafeString(insu);
});