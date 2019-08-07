const http = require('http');

const site=http.createServer(function(req,res){
    console.log('hello World');
    res.setHeader('Content-type','text/html');
    console.log(req.rawHeaders);
    res.end('<h1> Hello Class!!</h1>');
});
site.listen(3000);