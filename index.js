import express from 'express'
import dbConnection from './databases/dbConnections.js'
import userRouter from './src/modules/users/user.routes.js'
import notesRouter from './src/modules/notes/notes.routes.js'
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))



//Middleware
app.use(express.json())
app.use(userRouter)
app.use('/notes',notesRouter)



dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))