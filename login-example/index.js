import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";


const app = express();
dotenv.config();
app.use(bodyParser.json({ extended: true }));

