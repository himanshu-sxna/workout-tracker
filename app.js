const express = require("express");
const routes = require("./controllers/workout_controller");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  