"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration of our dotenv file:
dotenv_1.default.config(); // Loads .env file into process.env (for using extras)
// Create express APP with the importation
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define the first route of the application
app.get('/', (req, res) => {
    // Send Hello Word
    res.send('Welocome to App Express + TS + Swagger + Mongoose');
});
// Execute the application and listen to Request from PORT
app.listen(port, () => {
    console.log(`Express Server: running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map