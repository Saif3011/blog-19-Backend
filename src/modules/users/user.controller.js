import { userModel } from "../../../models/user.model.js"




const signUp = async(req,res) => {
  //Send data
  const {name,email,password} = req.body
  //await userModel.insertMany({name,email,password})
  //^Check if user exist or not :
  const user =await userModel.findOne({email})
  if(user){
    return res.json({message : "user already exist"})
  }else{
    await userModel.insertMany({name,email,password})
    res.json({message : "success",})
  }


  //^explication :
  //Retrieve data by find ===>  Array
  // let users = await userModel.find({name :"saif"},{password :0})
   //Retrieve data by findOne ==> object or null
  //  let users = await userModel.findOne({name :"saif11"})
  //find({email :"6762dc95b754ae7875b20910"}, {password :0})==> exclude password
  //res.json({message : "success",})
}

export{
    signUp  
}