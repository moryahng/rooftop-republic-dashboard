// Express required modules
const port = 8080;
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

// Dashboard Router set up
const DashboardRouter = require("./Routers/DashboardRouter");
const dashboardRouter = new DashboardRouter(express, dashboardService);

// Dashboard Service set up
const DashboardService = require("./Services/DashboardService");
const dashboardService = new DashboardService(express, axios);

app.use("/", dashboardRouter.router());

app.listen(port, () => {
    console.log(`Application listening to: http://localhost:${port}`)
})

module.exports = app;