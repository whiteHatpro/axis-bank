import "./App.css";
import React, { useState } from "react";
import axislogo from "../src/assets/Axis_Bank_logo.svg.png";
import addbtn from "../src/assets/add-30.png";
import sendbtn from "../src/assets/send.svg";
import usericon from "../src/assets/user-icon.png";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const generateFixedResponse = (message) => {
    return `You said: "${message}" - This is the fixed response.`;
  };
  const handleSendClick = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        text: inputValue,
        timestamp: new Date().toLocaleString(),
      };
      const responseMessage = generateFixedResponse(inputValue);
      newMessage.response = responseMessage;

      setChatHistory((prevChatHistory) => [...prevChatHistory, newMessage]);

      setInputValue("");
    }
  };
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperside">
          <div className="uppersidetop">
            <img src={axislogo} alt="" className="logo" />{" "}
            <span className="brand">axisbank</span>
          </div>
          <button className="midbtn">
            <img src={addbtn} alt="" className="addbtn" /> New Chat{" "}
          </button>
          <div className="uppersidebottom">
            <button className="query">
              <img src="" alt="" />
              how to find axisbank
            </button>
            <button className="query">
              <img src="" alt="" />
              how to find axisbank
            </button>
          </div>
          <div className="lowerside"></div>
        </div>
        </div>
        <div className="main">
          <div className="chats">
            <div className="chat">
              <div>
                <div className="chat-history">
                  {chatHistory.map((message, index) => (
                    <div key={index} className="chat-message">
                      <p>{message.text}</p>

                      {}
                      <p className="response">{message.response}</p>

                      <small>{message.timestamp}</small>
                    </div>
                  ))}
                </div>
                <img src={usericon} alt="" />
                <p className="txt">lorem20</p>
              </div>
              <div className="chat">
                <img src={axislogo} alt="" />
                <p className="txt">lorem20</p>
              </div>
            </div>
            <div className="chatFooter">
              <div className="inp">
                <input
                  type="text"
                  placeholder="Send a message"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="send" onClick={handleSendClick}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default App;
