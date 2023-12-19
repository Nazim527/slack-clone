import React, { useState } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import room from "../../server";
import Message from "../messages";
import ChatInput from "../chatInput";

const ChatBar = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = React.useState(null);
  const [roomMessage, setRoomMessage] = useState([])

  React.useEffect(() => {
    const roomDoc = doc(room, roomId);
    if (roomId) {
      onSnapshot(roomDoc, (snapshot) => {
        setRoomDetails(snapshot.data());
      });
    }

    const messagesQuery = query(
      collection(roomDoc, "messages"),
      orderBy("timestamp",'asc'),
    );

    onSnapshot(messagesQuery,snapshoot => {
      setRoomMessage(snapshoot.docs.map((doc) => doc.data()))
    })

  }, [roomId]);

  console.log(roomMessage);

  return (
    <div className="chatBar">
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>

        <div className="chat_headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>

        </div>
        <div className="chat_messages">
          {roomMessage.map(({message,user,userImage,timestamp}) => (
            <Message
            user={user}
            userImage={userImage}
            timestamp={timestamp}
            message={message}/>
          ))}
      </div>
      <ChatInput channelName = {roomDetails?.name} channelId ={roomId} />  
    </div>
  );
};

export default ChatBar;
