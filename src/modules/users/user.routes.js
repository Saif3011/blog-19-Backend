
import express from 'express'
import { signUp } from './user.controller.js'


userRouter = express.userRouter()

userRouter.post('/signUp',signUp)

export default userRouter