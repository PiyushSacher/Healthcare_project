// FRAMEWORK CONFIGURATION
const express = require("express");
const connectDb = require(" /config/dbConnection");
const errorHandler = require(" /middleware/errorHandler");
const cors = require(" cors ");

connectDb();
const app = express();
const port = process. env. PORT || 5000;
app. use (express.json());
app. use(cors());

// APP CONFIG START
app.listen(port, () =>{
    console. log(`Server running on port http:// localhost:${port}`);
});