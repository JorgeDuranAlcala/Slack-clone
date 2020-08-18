import React from 'react'
import './styles.css'

interface Props {
    Icon: any;
    title: string;
}

const SidebarRow = ({ Icon, title }: Props) => {
    return (
        <div className="sidebarRow">
            <Icon/>
            <h3>{title}</h3>
        </div>
    )
}

export default SidebarRow