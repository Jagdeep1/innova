'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EntrySchema = new Schema({
  name: String,
  ideaTitle: String,
  solution: String,
  empId:Number,
  contactNo:Number,
  teamMembers:String
  
});

module.exports = mongoose.model('Entry', EntrySchema);