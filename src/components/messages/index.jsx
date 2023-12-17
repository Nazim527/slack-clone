import React from "react";
import "./style.scss";
const Message = ({ user, timestamp, message, userImage }) => {
  console.log(user);
  return (
    <div className="message">
      <img src={userImage} alt="" />
      <div className="message_info">
        <h4>
          {user}
          <span className="message_timestamp">
            {new Date(timestamp?.toDate()).toUTCString().slice(4, 22)}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
