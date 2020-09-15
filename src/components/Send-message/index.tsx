import React, { ReactElement, useState } from 'react'
import { Input } from '@material-ui/core'
import db from '../../firebase';
import firebase from "firebase"
import { useStateValue } from "../../context/stateContext"
import { useParams } from 'react-router-dom';

import "./styles.css"

interface Props {
    channelId: string;
}

function SendMessage({  }: Props): ReactElement {
    
    const [input, setInput] = useState<string>('')
    const [{user}] = useStateValue()
    const { roomId } = useParams<{roomId: string}>() 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
     }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(roomId) 
        {
            db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .add({
                user: user?.displayName,
                message: input,
                userImage: user?.photoURL,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        }
    }
    
    return (
        <div className="sendMessage">
            <form onSubmit={handleSubmit} >
                <input className="sendMessage__input" onChange={handleChange} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default SendMessage
