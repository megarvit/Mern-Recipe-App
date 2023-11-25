import express from "express";  //creating api
import cors from "cors";  //rules to set up communication between frontend and backened
import mongoose from 'mongoose';


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://garvitjain:MERNpassword123@cluster0.cfeio4x.mongodb.net/Cluster0?retryWrites=true&w=majority");

app.listen(3001,() => console.log("SERVER STARTED!"));

