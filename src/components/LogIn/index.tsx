import React, { ReactElement, MouseEvent } from 'react'
import { Button } from '@material-ui/core'
import { auth, provider } from "../../firebase"
import { useStateValue } from "../../context/stateContext"
import { actionTypes } from "../../context/reducer"
import { useHistory } from 'react-router-dom'
import GIcon from "../../assets/googleIcon.png";

import "./styles.css"

interface Props {
    
}

export default function LogIn({}: Props): ReactElement {
    
   const [state, dispatch] = useStateValue()
   const history = useHistory()

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.LOGIN_USER ,
                user: result.user
            })
         })
        .catch(console.error)
    }
    
    return (
        <div className="login">
            <div className="hero">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7Lfjf8u7sihn8tTbxyIkeHJur6DbmlKCUTg&usqp=CAU" alt="slack-logo"/>
                <h2>Sign In and get started with This Slack clone </h2>
                <p>Create new channels And Chat with us and another people</p>
                <Button className="hero__btn" onClick={handleClick} size="small" variant="contained" color="primary">
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                    SignIn with Google
                </Button>
            </div>
        </div>
    )
}
