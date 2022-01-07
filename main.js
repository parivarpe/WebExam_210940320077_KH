const express = require("express");
const { json } = require("express/lib/response");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { addMsg, showMsg } = require("./user");

app.get("/ShowChatMsg", async (req, res) => {
  const list = await showMsg();
  res.json(list);
});

app.post("/AddChat", async (req, res) => {
  const msg = req.body;
  await addMsg(msg);
});

app.listen(4004, () => console.log("server started"));
