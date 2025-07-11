// init.js

const mongoose = require("mongoose");
const Listing = require("../models/listing");
const { data: sampleListings } = require("../data"); // Adjust path if data.js is elsewhere

const MONGO_URL = "mongodb://127.0.0.1:27017/tranger";

// Connect to MongoDB
main()
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// Seed DB with sample data
const initDB = async () => {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(sampleListings);
    console.log("✅ Database seeded successfully!");
    process.exit(); // Exit after completion
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  }
};

initDB();
