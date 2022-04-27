const fs = require("fs");
const path = require("path");
const logTxtPath = path.join(__dirname, "../logs/userLogs.txt");

const registerLogs = (req, res, next) => {
  fs.appendFileSync(
    logTxtPath,
    "El usuario ingresó a la ruta: " + req.url + "\n"
  );

  next();
};

module.exports = registerLogs;
