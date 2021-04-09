const express = require("express");

const projectsRouter = require("./projects/projects-router");
const actionsRouter = require("./actions/actions-router");

const server = express();

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Hello from server.js</h2>`);
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    custom: "Something went wrong",
    stack: err.stack,
  });
});

module.exports = server;
