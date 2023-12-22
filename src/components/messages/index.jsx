import React from "react";
import "./style.scss";
const Message = ({ user, timestamp, message, userImage }) => {
  const formattedDate = new Date(timestamp?.toDate()).toLocaleString("az-AZ", {
    timeZone: "Asia/Baku", // Azerbaycan saati
  });

  return (
    <div className="message">
      <img src={userImage} alt="" />
      <div className="message_info">
        <h4>
          {user} 
          <span className="message_timestamp">
            {` ${formattedDate}`}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
