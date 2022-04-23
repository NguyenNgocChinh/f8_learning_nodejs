const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;

app.engine("hbs", engine({ defaultLayout: "home/master", extname: ".hbs" }));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
console.log("asdadadsad", path.join(__dirname, "public"));

app.get("/", (req, res) => {
  res.render("home/index");
});

app.listen(port, () => console.log(`App listen at port: ${port}`));
