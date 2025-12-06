import mongoose from "mongoose";
export const studenSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
      age:{
        type:String,
        required:true
    },
     department :{
        type:String,
        required:true
    },
    cgpa :{
        type:String,
        required:true
    },
},{timestamps:true})

export const StudentInfo =mongoose.model("Student",studenSchema)