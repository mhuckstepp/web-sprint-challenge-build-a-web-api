const express = require("express");

const { checkActionsId } = require("./actions-middleware");
const { getAll, insert, update, remove } = require("./actions-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  getAll()
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:id", checkActionsId, (req, res, next) => {
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

router.put("/:id", checkActionsId, (req, res, next) => {
  update(req.params.id, req.body)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete("/:id", checkActionsId, (req, res, next) => {
  remove(req.params.id)
    .then((action) => {
      res.status(200).json(action);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
