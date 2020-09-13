require("dotenv").config();

const PORT = process.env.PORT || 5000;
const MONGODB_URL =
     process.env.MONGODB_URL ||
     "mongodb://localhost:27017/test?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";

module.exports = {
     PORT,
     MONGODB_URL,
};
