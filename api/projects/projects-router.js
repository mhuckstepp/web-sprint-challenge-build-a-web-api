const express = require("express");

const router = express.Router();

const { checkProjectsId } = require("./projects-middleware");
const { getAll, insert, update, remove } = require("./projects-model");

router.get("/", (req, res, next) => {
  getAll()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:id", checkProjectsId, (req, res, next) => {
  res.status(200).json(req.newBody);
});

router.post("/", (req, res, next) => {
  insert(req.body)
    .then((action) => {
      res.status(201).json(action);
    })
    .catch((err) => {
      next(err);
    });
});

router.put("/:id", checkProjectsId, (req, res, next) => {
  update(req.params.id, req.body)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete("/:id", checkProjectsId, (req, res, next) => {
  remove(req.params.id)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => {
      next(err);
    });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    custom: "Something went wrong in projects router",
    stack: err.stack,
  });
});

module.exports = router;
