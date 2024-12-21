import { notesModel } from "../../../models/notes.model.js"


const addNotes = async(req,res) => {
    const {title,desc,createdBy} = req.body;
   await notesModel.insertMany({title,desc,createdBy})
res.json({message: "success"})
}
/**
 * 1-updateOne()
 * 2-updateMany()
 * 3-replaceOne()
 * 4-findByIdAndUpdate()
 * 5-findOneAndReplace()
 * 6-findOneAndUpdate()
 * */
const updateNotes = async(req,res) => {
    const {title,desc,id} = req.body;
   await notesModel.updateMany({createdBy: "6762c1100436ff612e3529da"} ,{title: "selenium"})
res.json({message: "success"})
}

export{
    addNotes , updateNotes
}