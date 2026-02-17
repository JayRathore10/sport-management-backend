import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: {
    type : String , 
    minLength : 3 , 
    maxLength : 30 ,
    required : [true , "Name is req"]
  } , 
  sport : {
    type : String ,
    maxLength : 20 , 
    required : [true, "Sport name is needed"]
  } , 
  mobileNumber : {
    type : String , 
    minLength : 10 , 
    maxLength : 10 , 
    required : [true , "Mobile Number Needed"]
  } , 
  age : {
    type : Number , 
    required : [true , "Age is needed"]
  } ,
  gender :{
    type : String , 
    enum : ["Male" , "Female"],
    required : [true , "Gender is needed"]
  }
})

const Player = mongoose.model("player" , playerSchema);

export default Player;