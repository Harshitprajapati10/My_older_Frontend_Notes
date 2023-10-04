// console.log("Hello World")
//node .\tut63.js

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //   res.end('Hello World');
    res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selectors & more designing</title>
      <style>
  .container{
      border: 2px solid red;
      background-color: rgb(176, 234, 234);
      padding: 34px;
      margin: 34px auto;
      width: 666px;
      
  }
  .btn{
      font-family: 'Times New Roman', Times, serif;
      font-weight: bold;
      background: crimson;
      padding: 6px;
      border: none;
      cursor: pointer;
      font-size: 13px;
      border-radius: 4px;
      
  }
  .btn:hover{
      color: blueviolet;
      background-color: blanchedalmond;
      border: 2px solid black;
  }
  a{
      text-decoration: none;/**remove underline**/
      color: black;
  }
  a:hover{/*what happens when arrow moved*/
  
      color: rgb(201, 201, 203);
      background-color: rgb(3, 54, 25);
  }
  a:visited{
      color: yellow;
  }
  a:active{
      color: darkblue;
  }
      </style>
  </head>
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo inventore reprehenderit dolor ipsa ipsum dolorum facere totam, possimus obcaecati enim, sit hic in! Facilis non veniam deleniti nisi voluptatem distinctio, officiis minus? Incidunt, distinctio?
          </p>
          <a href="https://google.com" class="btn">Read more</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// use ctrl + click on URL to run server
//quit server by ctrl +c
//_ in repl(read evaluate print loop) saves last chararcter

// tab two times to show keywords