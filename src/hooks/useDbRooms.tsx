import React, { useState, useEffect } from 'react'
import db from '../firebase'

export function useDbRooms(roomId: string) {
    const [roomDetails, setRoomDetails] = useState<any>({})
    const [messages, setMessages] = useState<any[]>([])

    useEffect(() => {
        db.collection('rooms')
        .doc(roomId) 
        .onSnapshot(snapshot => setRoomDetails(snapshot.data()) )

        db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => {
            setMessages(
                snapshot?.docs.map(doc => doc.data())
            )
        })
    }, [roomId])

    return {
        roomDetails,
        messages
    }
}