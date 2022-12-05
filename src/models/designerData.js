const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { adminDB } = require('../../config/dataBase');

const DesignerDataSchema = new Schema({
    values:Array,
    key:String
 });

module.exports = DesignerData = adminDB.model("datadesigner", DesignerDataSchema);