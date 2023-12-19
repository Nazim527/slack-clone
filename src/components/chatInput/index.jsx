import React, { useState } from "react";
import "./style.scss";
import { Button } from "@mui/material";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { useStateValue } from "../../store/stateProvider";
import room from "../../server";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const [{user}] = useStateValue()

  const sendMessage = async (e) => {
    e.preventDefault();

    if (channelId && user) {
      const roomDoc = doc(room, channelId);
      const messagesRef = collection(roomDoc, "messages");

      try {
        await addDoc(messagesRef, {
          message: input,
          timestamp: serverTimestamp(),
          user: user.displayName,
          userImage: user.photoURL,
        });

        setInput("");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
