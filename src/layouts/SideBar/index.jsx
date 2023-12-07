import React from "react";
import "./style.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from '@mui/icons-material/Create';
import SideBarOptions from "../../components/sidebarOptions";
import InsertCommentIcon from '@mui/icons-material/InsertComment';


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
        <SideBarOptions title={"Youtube"}/>
    </div>
  );
};

export default SideBar;
