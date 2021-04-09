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

module.exports = {
  checkActionsId,
};
