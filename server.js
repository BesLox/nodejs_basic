const hostname = '127.0.0.1'
const port = 3000
const http = require('http')
const {parse} = require('querystring')

const server = http.createServer((req, res) =>{
    // if(req.method === 'POST'){
    //   RequestData(req, result => {
    //     console.log(result);
    //     res.body(`Hello ${result.name}`);
    //   });
    // }
    if(req.url === '/hello'){
      res.end(`
            <!doctype html>
            <html>
            <body>
                <form action='/' method="POST">
                    <input type="text" name="name"/></br>
                    <button>Submit</button>
                </form>
            </body>
            </html>
        `)
    }
    else if(req.method === 'POST'){
      RequestData(req, result => {
        console.log(result);
        res.end(`Hello ${result.name}`);
      });
    } 
    else {
      console.log(req);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain')
      res.end('DEFAULT!\n')
    }
});

function RequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
