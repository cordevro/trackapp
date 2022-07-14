const moongose = require("mongoose");

const Schema = moongose.Schema;

const WebmasterSchema = new Schema({

    user: String,
    password: String
});

var Webmaster = moongose.model("Webmaster", WebmasterSchema);

module.exports = Webmaster;