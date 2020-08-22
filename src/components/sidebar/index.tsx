import React, { useEffect, useState } from 'react'
import SidebarRow from "./sidebar-row";
import InboxIcon from "@material-ui/icons/Inbox";
import AppsIcon from "@material-ui/icons/Apps";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './styles.css'
import db from '../../firebase'


interface Props {
    
}

const Sidebar = (props: Props) => {

    useEffect(() => {
        
    }, [])





    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Clever Programer</h2>
                    <h3>
                        <FiberManualRecordIcon className="sidebar__info__icon"/>
                        Jorge Duran
                    </h3>
                </div>
                <CreateIcon className="sidebar__header__icon"/>
            </div>

            <SidebarRow title="Inbox" Icon={InboxIcon} />
            <SidebarRow title="Apps" Icon={AppsIcon} />
            <SidebarRow title="People and Groups" Icon={PeopleAltIcon} />
            <SidebarRow title="Show less" Icon={ExpandLessIcon} />
            <hr />
            <SidebarRow title="Channels" Icon={ExpandMoreIcon} />
            <hr />
            <SidebarRow title="Add Channels" Icon={AddIcon} />
            <SidebarRow title="My own channel" />
            <SidebarRow title="My own channel" />

        </div>
    )
}

export default Sidebar