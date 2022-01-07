const express = require("express");
const { json } = require("express/lib/response");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { addMsg, showMsg } = require("./user");

app.get("/displayMsg", async (req, res) => {
  const list = await showMsg();
  res.json(list);
});

app.post("/sendMsg", async (req, res) => {
  const msg = req.body;
  await addMsg(msg);
});

app.listen(4003, () => console.log("server started"));
