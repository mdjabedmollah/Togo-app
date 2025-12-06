import express from 'express'
import dotenv from 'dotenv'
import { Dbconnection } from './utils/db.js'
dotenv.config()
const app = express()
const port = process.env.PORT || 3001



//Db  data base
Dbconnection()
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
