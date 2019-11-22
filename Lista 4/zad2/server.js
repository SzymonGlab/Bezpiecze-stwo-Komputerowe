const https = require('https')
const fs = require('fs')


const options = {
  key: fs.readFileSync('../privkeyA.pem'),
  cert: fs.readFileSync('../certA.crt')
}

https.createServer(options, (req, res) => {
  res.write("hello world");
  res.end();
}).listen(3000);
