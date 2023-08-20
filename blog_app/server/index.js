import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import Connection from './database/db.js';
import router from './routes/route.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // Instead of bodyParser.json
app.use(express.urlencoded({ extended: true })); // Instead of bodyParser.urlencoded
app.use('/', router);

const PORT = process.env.PORT || 8000; // Allow the use of the provided PORT or default to 8000

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
