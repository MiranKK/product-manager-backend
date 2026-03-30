const express=require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const app=express();
const authRoute=require("./routes/auth")
const productRoute=require("./routes/product")
const port=process.env.PORT;
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.use("/api/auth",authRoute);
app.use("/api/products",productRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server running: http://localhost:${port}`));

