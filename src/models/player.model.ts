import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: [true, "Name is req"]
  },
  sport: {
    type: String,
    maxLength: 20,
    required: [true, "Sport name is needed"]
  },
  mobileNumber: {
    type: String,
    minLength: 10,
    maxLength: 10,
    required: [true, "Mobile Number Needed"]
  },
  age: {
    type: Number,
    required: [true, "Age is needed"]
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: [true, "Gender is needed"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please fill a valid email address']
  }, 
  password : {
    type : String , 
    required : [true , "Password is required"] , 
    minLength : 8
  } , 
  sportId : {
    // we generate by the name of the sport and search it using find() and then get the _id and put in this 
    type : mongoose.Schema.Types.ObjectId , 
    ref : "Sport"
  }
})

const Player = mongoose.model("player", playerSchema);

export default Player;