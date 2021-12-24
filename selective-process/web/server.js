const express = require('express');
const { resolve } = require('path');

const server = express();

server.use('/',
  express.static(
    resolve(
      __dirname,
      './build'
    )
  )
);

server.listen(process.env.PORT || 4000, (err) => {
  if (err) return console.log(err);

  console.log(`Server is running on PORT 4000`);
})