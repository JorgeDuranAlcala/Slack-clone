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
import db from '../../firebase'
import { useStateValue  } from '../../context/stateContext'
import { IRooms } from './types'
import { useDbChannels } from "../../hooks/useDbChannels";

import './styles.css'

interface Props {
    
}

const Sidebar = (props: Props) => {

   const channels = useDbChannels()
   const [{ user }, dispatch] = useStateValue()

   const addNewChannel = (e:any) => {
       const channelName = prompt('Type a channel name')
       db
        .collection('rooms')
        .add({
            name: channelName
        })
   }


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Clever Programer</h2>
                    <h3>
                        <FiberManualRecordIcon className="sidebar__info__icon"/>
                        { user.displayName }
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
            <SidebarRow onClick={addNewChannel} title="Add Channels" addOption={true} Icon={AddIcon} />
            {
                channels.map(room => <SidebarRow key={room.id} id={room.id} title={room.data.name} />)
            }

        </div>
    )
}

export default Sidebar