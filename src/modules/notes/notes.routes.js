import express from 'express'
import { addNotes, updateNotes } from './notes.controller.js';


const notesRouter = express.Router()

notesRouter.post('/',addNotes)
notesRouter.put('/',updateNotes)




export default notesRouter;