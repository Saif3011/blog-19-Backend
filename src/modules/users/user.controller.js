import { userModel } from "../../../models/user.model.js";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
  //Send data
  const { name, email, password } = req.body;
  //await userModel.insertMany({name,email,password})
  //^Check if user exist or not :
  const user = await userModel.findOne({ email });
  if (user) {
    return res.json({ message: "user already exist" });
  } else {
    const hash = bcrypt.hashSync(password, 2); //password and round
    await userModel.insertMany({ name, email, password: hash });
    res.json({ message: "success" });
  }

  //^explication :
  //Retrieve data by find ===>  Array
  // let users = await userModel.find({name :"saif"},{password :0})
  //Retrieve data by findOne ==> object or null
  //  let users = await userModel.findOne({name :"saif11"})
  //find({email :"6762dc95b754ae7875b20910"}, {password :0})==> exclude password
  //res.json({message : "success",})
};
const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  //Check user and  password
  if (user && bcrypt.compareSync(password, user.password)) {
    res.json({ message: "login with token" });
  } else {
    res.json({ message: "user not found or password in correct" });
  }
};

export { signUp, signIn };
