const express = require("express");
const { connectDatabase } = require("./database/database");
const catchAsync = require("./services/catchAsync");
const app = express();

const officeRouteAdmin = require("./routes/adminRoute/officeRoute");
const serviceRouteAdmin = require("./routes/adminRoute/serviceRoute");

const officeRoute = require("./routes/userRoute/officeRoute");
const serviceRoute = require("./routes/userRoute/serviceRoute");
//env variables setup
require("dotenv").config();

//to resolve undefined req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

app.use(express.json());
//database connection
catchAsync(connectDatabase());

app.get("/", (req, res) => {
  res.send("Hello, Project is live");
});
app.listen(port, () => {
  console.log(`Backend Server running at ${port}`);
});

//Admin Routes
app.use("/api/admin", officeRouteAdmin);
app.use("/api/admin", serviceRouteAdmin);

//User Routes
app.use("/api", officeRoute);
app.use("/api", serviceRoute);
