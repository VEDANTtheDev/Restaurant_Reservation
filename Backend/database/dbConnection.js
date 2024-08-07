import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "RESTAURANT"
    }).then(()=>{
        console.log("Connected to database successfully!");
    }).catch(err=>{
        console.log(`some error occured while connecting to database! ${err}`);
    });
};