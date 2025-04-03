require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
if (!process.env.MONGO_URI) {
    console.error("❌ MongoDB URI not found. Check your .env file.");
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URI, {
    dbName: "johnsonprashanth48",
}).then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Import and use user routes
const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

const PORT = process.env.PORT || 3991;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
