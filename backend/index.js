import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import { mongoDBURL } from "./config.js";

import booksRoute from "./routes/booksRoute.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 5500;

// *Middleware for parsing requests body
app.use(express.json());

// * Middleware for handing CORS Policy
// *TODO: Options 1: Allow All Origin with Default of cors(*)
// app.use(cors());

// *TODO: Options 2: Allow Custom Origins
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  //   console.log(req);
  return res.status(234).send("Welcome to MERN Stack  tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
