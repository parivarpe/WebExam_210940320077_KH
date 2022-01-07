const mysql = require("mysql");
const Promise = require("bluebird");
const { createConnection } = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "WEBEXAM",
};

const addMsg = async (Message) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `insert into MyChat (chatMsg) values(?)`;
  await connection.queryAsync(sql, [Message.chatMsg]);

  await connection.endAsync();
};

const showMsg = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `select * from MyChat`;
  const list = await connection.queryAsync(sql);

  await connection.endAsync();
  return list;
};

msg = "Helloo everyone";
//addMsg(msg);
showMsg();

module.exports = { addMsg, showMsg };
