function logger(req, res, next) {
  console.log("BODY: ", req.body);
  console.log("SEESION: ", req.session);
  next();
}

function isAdmin(req, res, next) {
  if (req.body.admin) {
    next();
  } else {
    res.status(401).send("son'd");
  }
}

module.exports = {
  logger,
  isAdmin
};
