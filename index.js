//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const pwordKey = "ILoveProgramming";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const pword = (req, res, next) => {
  let pwordEnter = req.body["password"];
  if (pwordEnter !== pwordKey) {
    return res.sendFile(__dirname + "/public/index.html");
  } else if (pwordEnter === pwordKey) {
    return res.sendFile(__dirname + "/public/secret.html");
  }
  next();
};

app.use(pword);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
