const express = require(express);
const conn = require("./config/db.config");
const cors = require("cors");
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth',require("./routes/authRoutes"));
app.use('/api/routes',require("./routes/taskRoutes"));

app.listen(process.env.PORT,()=>{
    console.log(`server is running at http://localhost:${process.env.PORT}`)
});