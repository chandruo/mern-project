require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const adminCreation = require("../server/seeds/admin.seeds")



const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected")
    await adminCreation();
  })
  .catch(err => console.error("MongoDB connection error:", err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
