"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
require("dotenv/config");
//for local
mongoose.connect(process.env.MONGO_DB_LOCAL);
//mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("connected to db"));
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB ---- >");
});
exports.default = mongoose;
