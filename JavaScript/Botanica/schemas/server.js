const mongoose = require("mongoose");

const serverSchema = mongoose.Schema({
    serverName: String,
    serverID: Number,
    prefix: String,
    redirectName: String,
    redirectID: String
})

module.exports = mongoose.model("Server", serverSchema);