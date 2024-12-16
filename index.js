import express from 'express'
import dbConnection from './databases/dbConnections.js'
import userRouter from './src/modules/users/user.routes.js'
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.use(userRouter)
dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))