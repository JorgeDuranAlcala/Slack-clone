import React from 'react'
import { Menu, Search, Timelapse as Clock, HelpOutline  } from "@material-ui/icons";
import { Avatar  } from "@material-ui/core";
import { useStateValue } from "../../context/stateContext";

import './styles.css'


interface Props {
    
}

const Header = (props: Props) => {

    const [{ user }] = useStateValue()

    return (
        <div className="header">
            <div className="header__left">
                <HelpOutline/>
                <Clock className="header__left__icon"/>
            </div>
            <div className="header__input">
                <input type="text"/>
                <Search/>
            </div>
            <div className="header__right">
                <Avatar src={user?.photoURL} />
            </div>
        </div>
    )
}

export default Header
