import React from 'react'
import './styles.css'
import { StarBorderOutlined, InfoOutlined } from '@material-ui/icons'
import Message from '../message'
import { useDbRooms } from '../../hooks/useDbRooms'
import SendMessage from '../Send-message'
import { useParams } from 'react-router-dom'

interface Props {
    
}

const Chat = (props: Props) => {

    const { roomId } = useParams<{roomId: string}>()
   const { roomDetails, messages } =  useDbRooms(roomId)


    return (
        <div className="chat">
            {/* Header */}
            <div className="chat__header">
                <div className="chat__header__left">
                    <h4>
                        <strong> #{roomDetails?.name} </strong>  
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
            <div className="chat__messages">
                {

                    messages && messages.map(({userImage, message, user, timestamp}, i) => 
                        <Message
                            key={i} 
                            user={user} 
                            messageBody={message} 
                            userImage={userImage}
                            timestamp={timestamp && timestamp.toDate()}
                        />)
                }
            </div>
        </div>
    )
}

export default Chat