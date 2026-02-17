import mongoose from "mongoose";
import { Document } from "mongoose";

interface SportInterface extends Document {
  name: string  , 
  category : "male" | "female" , 
  eventDate : Date ,
  eventTime : Date , 
}

const sportSchema = new mongoose.Schema<SportInterface>({
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