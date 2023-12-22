import React from 'react';
import './style.scss';
import { useNavigate, useParams } from 'react-router-dom';
import room from '../../server';
import { addDoc } from 'firebase/firestore';

const SideBarOptions = ({ Icon, title, id, addChannelOption }) => {
  const navigation = useNavigate();

  async function addChannel() {
    const channelName = prompt("Please enter channel name")

    if(channelName){
      await addDoc(room, {
        name: channelName
      })
    }
  }

  function selectedChannel() {
    console.log(id);
    if(id){
      navigation(`/room/${id}`)
    } else {
      navigation(`/room/YUmgkaAWvZUf4sp9mTDL`)
    }
  }

  return (
    <div className="sidebarOptions" onClick={addChannelOption ? addChannel : selectedChannel}>
      {Icon && <Icon className="sidebarOptions_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOptions_channel">
          <span className="sidebarOption_hash"># </span>
          {title}
        </h3>
      )}
    </div>
  );
};

export default SideBarOptions;
