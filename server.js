const express = require("express");
const path = require("path");
const distPath = "/dist/pokedex";

const app = express();

app.use(express.static(__dirname + distPath));

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname + `${distPath}/index.html`));
});

app.listen(process.env.PORT || 8000);
