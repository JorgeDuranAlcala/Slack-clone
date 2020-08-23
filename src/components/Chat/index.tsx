import React, { useEffect, useState } from 'react'
import './styles.css'
import { StarBorderOutlined, Info, InfoOutlined } from '@material-ui/icons'
import db from '../../firebase'
import { useParams } from 'react-router-dom'

interface Props {
    
}

const Chat = (props: Props) => {

    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState<any>({})

    useEffect(() => {
        db.collection('rooms')
        .doc(roomId) 
        .onSnapshot(snapshot => setRoomDetails(snapshot.data()) )
    }, [roomId])

    console.log(roomDetails)

    return (
        <div className="chat">
            {/* Header */}
            <div className="chat__header">
                <div className="chat__header__left">
                    <h4>
                        <strong> #{roomDetails.name} </strong>  
                        <StarBorderOutlined/>
                    </h4>
                </div>
                <div className="chat__header__right">
                    <p>
                        <InfoOutlined/>
                        Details
                    </p>
                </div>
            </div>
            {/* messages */}
            
        </div>
    )
}

export default Chat