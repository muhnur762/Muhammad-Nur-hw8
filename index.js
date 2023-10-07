const express = require('express')
const app = express()
const port = 3000

// ekport query
const pool = require('./queries.js');
// export routes
const route = require('./route.js');

app.use('/route',route);


// cek koneksi 
pool.connect((err, res)=> {
    console.log(err);
    console.log('conected');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})