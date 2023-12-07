import React from "react";
import "./style.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from '@mui/icons-material/Create';
import SideBarOptions from "../../components/sidebarOptions";
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            Rzayev Nazim
          </h3>
        </div>
        <CreateIcon/> 
      </div>
        <SideBarOptions Icon={InsertCommentIcon} title={"Threads"}/>
        <SideBarOptions Icon={InboxIcon} title={"Mentions & Reactions"}/>
        <SideBarOptions Icon={DraftsIcon} title={"Saved Items"}/>
        <SideBarOptions Icon={BookmarkBorderIcon} title={"Channel Browser"}/>
        <SideBarOptions Icon={PeopleAltIcon} title={"People & User Groups"}/>
        <SideBarOptions Icon={AppsIcon} title={"Apps"}/>
        <SideBarOptions Icon={FileCopyIcon} title={"File browser"}/>
        <SideBarOptions Icon={ExpandLessIcon} title={"Show less"}/>
    </div>
  );
};

export default SideBar;
