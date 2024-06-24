import mongoose from "mongoose";


export const dbconn =  mongoose.connect('mongodb://localhost:27017/manageBooksAndAthour')
    .then(() => {
        console.log("database connected successflluy");
    })
    .catch((err) => {
        console.log("database DisConnected " + err);
    })