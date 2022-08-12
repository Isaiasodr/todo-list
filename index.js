const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const conn = require("./db/conn");

const Task = require("./models/Task");

const TaskRoutes = require("./routes/tasksroute");

const port = process.env.PORT || 3000;

const cls = require("cls-hooked");
const namespace = cls.createNamespace("....");
const Sequelize = require("sequelize");

Sequelize.useCLS(namespace);

app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extends: true,
  })
);

app.use(express.json());

app.use("/tasks", TaskRoutes);

app.get("/", (req, res) => {
  res.render("tasks/all");
});

app.use(express.static("public"));

conn
  .sync(/* { force: true } */)
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
