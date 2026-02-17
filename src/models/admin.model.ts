import mongoose, { MongooseError } from "mongoose";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Admin name is needed"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please fill a valid email address']
  } , 
  mobileNumber : {
    type : String  , 
    required : [true, "Mobile number needed"] , 
    minLength : 10 , 
    maxLength : 10 
  } , 
  password : {
    type : String  , 
    required : [true , "Password Needed"]  , 
    minLength : 8 , 
  }
})


const Admin = mongoose.model("admin" , adminSchema);

export default Admin ;