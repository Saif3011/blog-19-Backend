import  mongoose  from "mongoose";

function dbConnection() {
    mongoose.connect('mongodb://127.0.0.1:27017/blog-19').then(() => {
        console.log("db connected");
        
    }).catch((err) => {
        console.log("db error "+ err);
        
    });  
}

export default dbConnection;