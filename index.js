const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{

 if(req.url=="/"){
        const data=fs.readFileSync('home.html','utf8');
        res.end(data);
    }
    else if(req.url=='/about'){
        const data=fs.readFileSync('about.html','utf8');
        res.end(data);
    }
    else if(req.url=='/contact'){
        const data=fs.readFileSync('contact.html','utf8');
        res.end(data);
    }
    else if(req.url=='/terms'){
        const data=fs.readFileSync('terms.html','utf8');
        res.end(data);
    }
 // else if(req.url=='/home'){
 //     const data=fs.readFileSync('home.html','utf8');
 //     res.end(data);
 // }

})
server.listen(8000,()=>{
    console.log("successfully running..");
});