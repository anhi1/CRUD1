import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'User', //el usuario hace una ref al modelo
      required: true
    }
  },
  {
    timesTamps: true,
  }
);

export default mongoose.model("Task", taskSchema)