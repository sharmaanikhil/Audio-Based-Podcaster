const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("DB Connected");
  } catch (error) {
  console.error("MongoDB Connection Error:", error); 
}
};

conn();
