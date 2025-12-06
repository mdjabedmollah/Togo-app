import express from 'express'
import dotenv from 'dotenv'
import { Dbconnection } from './utils/db.js'
import studentRoute from "./routes/studenRoutes.js";

dotenv.config()
const app = express()
const port = process.env.PORT || 3001



//Db  data base
Dbconnection()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// all api 

app.use('/api/vi/',studentRoute)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
