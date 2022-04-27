let mainController = {
  index: function (req, res, next) {
    res.render("index");
  },
  admin: function (req, res, next) {
    res.send("hola" + req.admin);
  },
};

module.exports = mainController;
