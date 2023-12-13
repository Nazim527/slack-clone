import React from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";

const ChatBar = () => {
  const { roomId } = useParams()
  return (
  <div className="chatBar">
    <div className="chat_header">

        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong>#general</strong>
            <StarBorderOutlined/>
          </h4>
        </div>

        <div className="chat_headerRight">
          <p>
            <InfoOutlined/> Details
          </p>
        </div>
    </div>
  </div>
  )
};

export default ChatBar;
