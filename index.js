
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import path from 'path';

import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename= fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes)

app.use(express.static(path.join(__dirname,'./client/build')))

app.get("*", (req,res)=>(
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
))
const PORT = process.env.PORT|| 5000;

mongoose.connect('mongodb+srv://Nivethathiyagarajan:Nivetha123@cluster0.tq8bagf.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);