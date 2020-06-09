const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const createRouter = require("./helpers/create_router.js");
const app = express();

app.use(cors());

app.use(bodyParser.json());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db("bugtracker");
    const detailsCollection = db.collection("bugs");
    const usersCollection = db.collection("users");
    const detailsRouter = createRouter(detailsCollection);
    const usersRouter = createRouter(usersCollection);
    app.use("/api/bugs", detailsRouter);
    app.use("/api/users", usersRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log("listening on port 3000");
});
