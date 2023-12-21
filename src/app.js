import express from "express";
import bodyParser from "body-parser";

const app = express();
const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("page"));

app.get("/", (req, res) => {
  res.send("page read");
});

// form에 대한 정보수신
app.post("/edit", urlencodedParser, (req, res) => {
  // console.log(req.body.msg);
});

app.listen(2080, () => {
  console.log("listening on port");
});
