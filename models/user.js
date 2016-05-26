var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email:  String,
  password: String,
  // blogs: [{
  //   title: String,
  //   created_on: {type: Date, default: Date.now},
  //   last_edited: {type: Date, default: Date.now},
  //   posts: [{
  //     title: String,
  //     created_on: {type: Date, default: Date.now},
  //     content: String,
  //     comments: [{
  //       content: String,
  //       author: String
  //     }]
  //   }]
  // }],
  // date: { type: Date, default: Date.now },
  // hidden: Boolean,
  // meta: {
  //   votes: Number,
  //   favs:  Number
  // }
});

userSchema.statics.helloWorld = function() {
  return "Nihao!"
}

// userSchema.statics.allUsers = function() {
//   // Find all users.
//   console.log("ALL USERS");
//   return this.find();
// }

console.log("In User model")

module.exports = mongoose.model('User', userSchema);