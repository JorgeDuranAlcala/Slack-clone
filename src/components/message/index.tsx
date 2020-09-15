import React, { ReactElement } from 'react'
import { Avatar } from '@material-ui/core'
import moment from "moment"

import './styles.css'

interface Props {
    userImage: string;
    user: string;
    messageBody: string;
    timestamp: Date
}

export default function Message({userImage, messageBody, user, timestamp}: Props): ReactElement {


    return (
        <div className="message">
                <Avatar src={userImage} className="message__userImage" />
            <div className="message__messageInfo">
                <h4>
                    {user}
                    <span>
                        { timestamp && moment(timestamp, "YYYYMMDD").fromNow() }
                    </span>
                </h4>
                <p>{messageBody}</p>
            </div>
        </div>
    )
}
