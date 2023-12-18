import React from "react";
import "./style.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SideBarOptions from "../../components/sidebarOptions";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import room from "../../server";
import { onSnapshot } from "firebase/firestore";
import { useStateValue } from "../../store/stateProvider";

const SideBar = () => {
  const [channels, setChannels] = React.useState([]);
  const [{user}] = useStateValue()

  React.useEffect(() => {
    const unsubscribe = onSnapshot(room, (snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, [room]);

  
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SideBarOptions Icon={InsertCommentIcon} title={"Threads"} />
      <SideBarOptions Icon={InboxIcon} title={"Mentions & Reactions"} />
      <SideBarOptions Icon={DraftsIcon} title={"Saved Items"} />
      <SideBarOptions Icon={BookmarkBorderIcon} title={"Channel Browser"} />
      <SideBarOptions Icon={PeopleAltIcon} title={"People & User Groups"} />
      <SideBarOptions Icon={AppsIcon} title={"Apps"} />
      <SideBarOptions Icon={FileCopyIcon} title={"File browser"} />
      <SideBarOptions Icon={ExpandLessIcon} title={"Show less"} />
      <hr />
      <SideBarOptions Icon={ExpandMoreIcon} title={"Channels"} />
      <hr />
      <SideBarOptions Icon={AddIcon} title={"Add Channel"} addChannelOption={true}/>

      {/* //? Connect to DB and list all the channels */}
      {/*//* Sidebar Options...  */}
      {channels.map((channel) => (
        <SideBarOptions title={channel.name} id={channel.id} key={channel.id} />
      ))}
    </div>
  );
};

export default SideBar;
