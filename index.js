// knex and .env
const env = require("dotenv");
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

// Express required modules
const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handlebars required modules
const { engine } = require("express-handlebars");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Axios set up
const axios = require("axios");

// // Dashboard Router set up
 const DashboardRouter = require("./Routers/DashboardRouter");
 const dashboardRouter = new DashboardRouter(express);

// API Service set up
const ApiService = require("./Services/ApiService");
const apiService = new ApiService(knex, axios);
// API Router set up
const ApiRouter = require("./Routers/ApiRouter");
const apiRouter = new ApiRouter(express, apiService);

// app.use("/:id/dashboard", dashboardRouter.router());
app.use("/", dashboardRouter.router());
app.use("/api", apiRouter.router());

app.listen(port, () => {
  console.log(`Application listening to: http://localhost:${port}`);
});

module.exports = app;
