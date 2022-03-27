const mongoose = require("mongoose");
mongoose.connect(process.env.MONGDB_URL);


module.exports = mongoose;