const { get } = require("./projects-model");

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
};
