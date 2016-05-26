var repl = require("repl");

// environment configuration
var epa = require("epa");

// database
var db = require("./models/db");

// app specific modules
var http = require('http');
    db = require('./models/db');
var users = require('./models/user');
// var pages = require('./pages');

// i love moment.js
// var moment = require("moment");

// connect to the database
db.connect(epa.mongo, function(err){
  if (err){ throw err; }

  var envName = process.env.NODE_ENV || "dev";

  // open the repl session
  var replServer = repl.start({
    prompt: "SignalLeaf (" + envName + ") > ",
  });

  // attach my modules to the repl context
  replServer.context.epa = epa;
  replServer.context.db = db;
  replServer.context.Podcasts = Podcasts;
  replServer.context.Accounts = Accounts;
  // replServer.context.moment = moment;

});