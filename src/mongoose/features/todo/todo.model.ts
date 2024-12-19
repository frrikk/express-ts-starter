import * as mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Todo", todoSchema);
