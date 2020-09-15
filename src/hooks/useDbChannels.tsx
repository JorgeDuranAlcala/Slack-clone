import React  from 'react'
import db from '../firebase'
import { useStateValue } from "../context/stateContext";
import { IRooms } from '../components/sidebar/types';

export function useDbChannels() {
    const [channels, setChannels] = React.useState<IRooms[]>([])
    const [{ user }, dispatch] = useStateValue()

    React.useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
                setChannels(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })) as IRooms[]
                )
        })
    }, [])

    return channels;
}