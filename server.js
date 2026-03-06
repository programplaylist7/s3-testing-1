import express from "express"
import mongoose from "mongoose";
import serverless from "serverless-http";

const app = express();
app.use(express.json());

console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE:", process.env); // DEBUG

// MongoDB connection caching (IMPORTANT for Lambda
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;

  const db = await mongoose.connect(process.env.MONGO_URL);
  isConnected = db.connections[0].readyState;
  console.log("MongoDB Connected");
};

app.get("/", (req, res) => {
    res.json({
        "message": "working fine"
    })
});

const serverlessHandler = serverless(app); // create once

export const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  await connectDB();

  return serverlessHandler(event, context); // reuse handler
};