require('dotenv').config();
const express = require('express');
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/shyam',(req,res) => {
    res.send("hi my self Shyam Agarwal")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})