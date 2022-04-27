const admins = ["Ada", "Greta", "Tim", "Vim"];

const userAuth = (req, res, next) => {
  let user = req.query.user;

  if (user && admins.includes(user)) {
    req.admin = user;
    next();
  }

  res.send("Error");
};

module.exports = userAuth;
