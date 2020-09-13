const mongoose = require("mongoose");
const { MONGODB_URL } = require("./config");

async function DBconnect() {
     try {
          await mongoose.connect(MONGODB_URL, {
               useNewUrlParser: true,
          });
          console.log(`MongoDB connect successfully`);
     } catch (error) {
          console.log(error);
     }
}
async function DBdisconnect() {
     try {
          await mongoose.disconnect();
     } catch (error) {
          console.log(error);
     }
}
module.exports = { DBconnect, DBdisconnect };
