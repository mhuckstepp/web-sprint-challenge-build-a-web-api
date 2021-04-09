const { get } = require("./projects-model");

function checkBody(req, res, next) {
  if (!Object.keys(req.body).length) {
    res.status(400).json({ message: "please send a valid project or action" });
  } else if (!req.body.name) {
    res.status(400).json({ message: "please send a valid name" });
  } else if (!req.body.description) {
    res.status(400).json({ message: "please send a valid description" });
  } else {
    next();
  }
}

function checkProjectsId(req, res, next) {
  get(req.params.id)
    .then((action) => {
      if (action) {
        req.newBody = action;
        next();
      } else {
        res.status(404).json({ message: "Project id not found" });
      }
    })
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  checkProjectsId,
  checkBody,
};
