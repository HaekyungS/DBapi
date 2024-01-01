import express from "express";
import bodyParser from "body-parser";
import { readDB, updateDB } from "./firebase.js";

const app = express();
const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("page"));
app.use(express.static("src"));

app.get("/", (req, res) => {
  res.send("page read");
});

// DB 추가 및 업데이트
app.post("/add", urlencodedParser, (req, res) => {
  let update = updateDB(
    req.body.collection,
    req.body.doc,
    req.body.field,
    req.body.value,
    req.body.merge
  );
  console.log(update);
});

// DB 조회
app.post("/read", urlencodedParser, (req, res) => {
  readDB(req.body.collection, req.body.doc, req.body.field, req.body.value);
});

app.listen(2080, () => {
  console.log("listening on port");
});
