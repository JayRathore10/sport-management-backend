import mongoose from "mongoose";

const sportSchema = new mongoose.Schema({
  name : {
    type : String  , 
    required :[true, "Sport name needed"] ,
    minLength : 3 ,
    maxLength : 20 , 
  } , 
  category : {
    type : String ,
    required : [true, "Category needed"] , 
    enum : ["male" , "female"] ,
    default : "male"
  } , 
  eventDate : {
    type : Date, 
    required: [true , "Even Date needed"] ,
  } , 
  eventTime : {
    type : Date , 
    required : [true ,"Event Starting time is needed"]
  }
})

const Sport = mongoose.model("sport" , sportSchema);

export default Sport ;