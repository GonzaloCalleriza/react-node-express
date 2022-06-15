import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Configuration of our dotenv file:
dotenv.config(); // Loads .env file into process.env (for using extras)

// Create express APP with the importation

const app: Express = express();
const port = process.env.PORT || 8000;

// Define the first route of the application
app.get('/', (req: Request, res: Response) => {
    // Send Hello Word
    res.send('Welocome to App Express + TS + Swagger + Mongoose');
});

// Execute the application and listen to Request from PORT
app.listen(port, () => {
    console.log(`Express Server: running at http://localhost:${port}`);
});