import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { NavItem } from "react-bootstrap";

function App() {
  return (
    <>
      <Header></Header>
      <MyComponent></MyComponent>
    </>
  );
}

function Header() {
  const Stud_name = "Parmeshwari Varpe";
  const stud_id = 210940320077;
  return (
    <div className="container">
      <div className="row bg-secondary">
        <div className="col12">
          <h3>MyChatApp </h3>
          By {Stud_name} {stud_id}{" "}
        </div>
      </div>
    </div>
  );
}

function MyComponent() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);

  const ChangeMsg = (e) => {
    const newmsg = e.target.value;
    setMsg(newmsg);
  };
  const SendMsg = () => {
    const url = `http://localhost:4004/AddChat`;
    const body = {
      chatMsg: msg,
    };
    axios.post(url, body);
    let newlist = [body, ...list];
    setList(newlist);
    setMsg("");
  };

  const GetMsg = async () => {
    const url = `http://localhost:4004/AddChat`;
    const result = await axios.get(url);

    const list = result.data;
    const newlist = [...list];
    setList(newlist);
  };

  useEffect(() => GetMsg(), []);

  return (
    <div className="container -fluid">
      <div className="row mt-4">
        <div className="col">
          <input
            type="textarea"
            value={msg}
            id=""
            placeholder="Lets chat here....."
            className=" form-control"
            onChange={ChangeMsg}
          />
          <br></br>
          <input
            type="button"
            value="SEND"
            id=""
            placeholder="Lets chat here....."
            className="btn btn-secondary"
            onClick={SendMsg}
          />
        </div>
      </div>

      <div>
        {list.map((item, index) =>
          index % 2 == 0 ? (
            <p className="alert alert-success mt-2" key={index}>
              {item.chatMsg}
            </p>
          ) : (
            <p
              className="alert alert-success mt-2 justify-content-end align-text-end"
              key={index}
            >
              {item.chatMsg}
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default App;
