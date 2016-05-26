var mongoose = require( 'mongoose' ),
    User = mongoose.model('User');

console.log("In pages.js")

var user = new User({email : "tori@gmail.com", password: "password"});
console.log(user);
console.log(user.email);
console.log(User.helloWorld());

user.save();

console.log("FINDING USER:")
User.find({email: 'tori@gmail.com'}, function(err, user) {
  if (err) return handleError(err);
  console.log(user);
});

exports.index = function (req, res) {
  User.create({
    email : "tori@gmail.com",
    password: "password"
   }, function(err, user) {
     var strOutput;
     res.writeHead(200, {
       'Content-Type': 'text/plain'
     });
     if (err) {
       console.log(err);
       strOutput = 'Oh dear, we\'ve got an error';
     } else {
       console.log('User created: ' + user);
       strOutput = user.email + ' password is ' + user.password;
     }
     res.write(strOutput);
     res.end();
   });
 };