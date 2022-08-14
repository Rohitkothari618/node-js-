const https=require('http');
const server=https.createServer((req,res)=>{
  if(req.url==='/'){
    res.end('welcome to our new home page');

  }

  else if(req.url==='/about'){
    res.end('here is the history and about page');
    
  }
  else{
    res.end(
        ` <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>`
      )
  }




})

server.listen(5000);