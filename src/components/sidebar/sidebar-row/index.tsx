import React from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom'

interface Props {
    Icon?: any;
    title: string;
    addOption?: boolean;
    id?: string
}

const SidebarRow = ({ Icon, title, addOption, id }: Props) => {

    const history = useHistory()
    console.log(history)

    const addChannel = () => {
        
    }

    const selectChannel = () => {
        if(id) {
            history.push(`/room/${id}`)
        } else {
            history.push(title)
        }
    }

    return (
        <div className="sidebarRow" 
            onClick={addOption ? addChannel : selectChannel }
        >
            { Icon ? (
                 <>
                    <Icon/>
                    <h3>{title}</h3>
                 </>
                )
                : (
                    <>
                        <h3 className="sidebarRow__channel"># {title}</h3>
                    </>
                )
            }
        </div>
    )
}

export default SidebarRow