# step to setup or run server with db connection

B.for single node js version
1.install node js required or latest stable version(LTS) from browser(https://nodejs.org/en/download).
2.run command npm init (if you want to enter project details) or npm init -y (if don't want to enter details)
3.install express(https://www.npmjs.com/package/express) to run project locally on localhost
4. install nodemode(https://www.npmjs.com/package/nodemon) to automatically refresh server when changes are made.
5.create index.js file which root files of project and below code
  const express = require('express');
  const app = express();
  const port = 5000;
  
  app.get('/', (req, res) => {
      res.send('Hello World!');
  });
  
  app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
  });
