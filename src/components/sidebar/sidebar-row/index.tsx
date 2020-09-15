import React from 'react'
import './styles.css'
import { useHistory } from 'react-router-dom'

interface Props {
    Icon?: any;
    title: string;
    addOption?: boolean;
    id?: string;
    onClick?: (e:any) => void;
}

const SidebarRow = ({ Icon, title, addOption, id, onClick }: Props) => {

    const history = useHistory()

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
                    <h3 onClick={onClick&&onClick} >{title}</h3>
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