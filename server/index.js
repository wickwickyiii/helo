require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const massive = require("massive");

const { logger, isAdmin, isThereACart } = require("./session");

const port = 3001;

const app = express();

app.use(json());
app.use(express.static(`${__dirname}/../build`));

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log("ERROR", err));

app.use(
  session({
    secret: "iliekturtlez",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 2 * 7 * 24 * 60 * 60 * 1000
    }
  })
);

app.use(logger);

app.get("/login", logger, (req, res, next) => {
  req.session.user = "Eric";
  res.sendStatus(200);
});

app.get("/session/proof", (req, res, next) => {
  console.log("SESSION: ", req.session.user);
});

app.post("/api/super/secret", isAdmin, (req, res, next) => {
  res.status(418).send("SUper secREt");
});

app.post("/api/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.post("/dash/message", (req, res, next) => {
  const db = req.app.get("db");
  let { message } = req.body;
  db.send_message([message])
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => console.log(err));
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
