/* Question :Create a backend Restful Application, and design the following API. [10 Marks]
● An API that creates message records in the MESSAGE TABLE.
● An Api that read all the messages from the MESSAGE table.
● Test the API using POSTMAN.
● FRONTEND INTEGRATION IS OPTIONAL
● SHARE THE SCREENSHOT OF POSTMAN OUTPUT*/

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

  let sql = `insert into MESSAGE (Message) values (?)`;
  await connection.queryAsync(sql, [Message.Message]);
  console.log("Connected");
  console.log(Message);

  await connection.endAsync();
};

const showMsg = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `select * from MESSAGE`;
  await connection.queryAsync(sql);

  //console.log("selectes");

  await connection.endAsync();
};

msg = "Helloo everyone";
//addMsg(msg);
//showMsg();

module.exports = { addMsg, showMsg };
