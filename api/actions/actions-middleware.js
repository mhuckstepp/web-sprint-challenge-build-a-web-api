const { get } = require("./actions-model");

function checkActionsId(req, res, next) {
  get(req.params.id)
    .then((action) => {
      if (action) {
        req.newBody = action;
        next();
      } else {
        res.status(404).json({ message: "Action id not found" });
      }
    })
    .catch((err) => {
      next(err);
    });
}

function checkBody(req, res, next) {
  if (!Object.keys(req.body).length) {
    res.status(400).json({ message: "please send a valid project or action" });
  } else if (!req.body.project_id) {
    res.status(400).json({ message: "please send a valid project id" });
  } else if (!req.body.description) {
    res.status(400).json({ message: "please send a valid description" });
  } else if (!req.body.notes) {
    res.status(400).json({ message: "please send valid notes" });
  } else {
    next();
  }
}

module.exports = {
  checkActionsId,
  checkBody,
};
