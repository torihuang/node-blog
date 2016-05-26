var mongoose = require( 'mongoose' );
var users = require('./../models/user');
    User = mongoose.model('User');

describe("Jasmine testing", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});

describe("User", function() {
  var user = new User({email : "lissie@gmail.com", password: "password"});

  it("can create a new user", function() {
    expect(user.email).toEqual("lissie@gmail.com")
    expect(user.password).toEqual("password")
  })
  it("can save a user", function() {
    user.save();
    User.find().count(function(err, count) {
      expect(count).toEqual(1);
    })
  })
})