import mongoose from "mongoose";
 const studenSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
      age:{
        type:Number,
        required:true
    },
     department :{
        type:String,
        required:true
    },
    cgpa :{
        type:Number,
        required:true
    },
},{timestamps:true})

export const StudentInfo =mongoose.model("Student",studenSchema)