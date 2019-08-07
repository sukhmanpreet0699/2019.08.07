const express=require('express')
const app=express()
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('GET send')
});

app.post('/',function(req,res){
    console.log(req.body);
    res.send('POST send')
});

app.put('/',function(req,res){
    res.send('PUT send')
});

app.delete('/',function(req,res){
    res.send('DELETE send')
});


app.listen(3000);