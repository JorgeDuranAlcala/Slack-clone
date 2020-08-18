import React from 'react'
import { Menu, Search  } from "@material-ui/icons";
import { Avatar  } from "@material-ui/core";
import './styles.css'

interface Props {
    
}

const Header = (props: Props) => {
    return (
        <div className="header">
            <div className="header__left">
                <Menu/>
            </div>
            <div className="header__input">
                <input type="text"/>
                <Search/>
            </div>
            <div className="header__right">
                <Avatar src="https://picsum.photos/200/300" />
            </div>
        </div>
    )
}

export default Header