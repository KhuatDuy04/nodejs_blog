const express = require("express");
const { engine } = require("express-handlebars");

const sass = require('sass');
const path = require("path");

const result = sass.compile(path.join(__dirname, 'resources/scss/app.scss'));
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan("combined"));

app.engine("hbs", engine({
  extname: '.hbs'
}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

const route = require('./routes')
//route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
