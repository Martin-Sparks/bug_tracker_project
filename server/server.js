const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const createRouter = require("./helpers/create_router.js");
const app = express();

app.use(cors());

app.use(bodyParser.json());

MongoClient.connect("mongodb://mongodb:27017")
  .then((client) => {
    const db = client.db("bugtracker");

    // var bucket = new mongodb.GridFSBucket(db);

    // var Binary = require('mongodb').Binary;

    const detailsCollection = db.collection("bugs");
    const usersCollection = db.collection("users");
    const projectsCollection = db.collection("projects");
    const imgCollection = db.collection("img")
    const detailsRouter = createRouter(detailsCollection);
    const usersRouter = createRouter(usersCollection);
    const projectsRouter = createRouter(projectsCollection);
    const imgRouter = createRouter(imgCollection);
    app.use("/api/bugs", detailsRouter);
    app.use("/api/users", usersRouter);
    app.use("/api/projects", projectsRouter);
    app.use("/api/img", imgRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log("listening on port 3000");
});
