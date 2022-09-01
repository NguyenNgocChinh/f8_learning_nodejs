require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const route = require("./routes");
const db = require("./config/db");

const app = express();
const port = 3000;

app.engine("hbs", engine({ defaultLayout: "home/master", extname: ".hbs" }));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));

// Connect to database
db.connect();

// Router
route(app);

app.listen(port, () => console.log(`App listen at port: ${port}`));
