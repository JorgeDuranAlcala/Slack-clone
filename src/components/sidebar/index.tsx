import React from 'react'
import SidebarRow from "./sidebar-row";
import MenuIcon from "@material-ui/icons/Menu";
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './styles.css'

interface Props {
    
}

const Sidebar = (props: Props) => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h3>
                        <FiberManualRecordIcon className="sidebar__header__icon"/>
                        Jorge Duran
                    </h3>
                </div>
                <CreateIcon/>
            </div>

            <SidebarRow title="home" Icon={MenuIcon} />
        </div>
    )
}

export default Sidebar