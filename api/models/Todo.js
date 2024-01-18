const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  test: { type: String, require: true },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: { type: String, default: Date.now() },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
