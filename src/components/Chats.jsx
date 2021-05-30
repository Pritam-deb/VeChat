import React from 'react';
import {useHistory} from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import {auth} from '../firebase';
import {useAuth} from '../contexts/AuthContext'

const Chats = () => {

    const history=useHistory();
    const {user} = useAuth();
    console.log(user)

    const handleLogout = async() => {
        await auth.signOut();
        history.push('/');
    }


    return(
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    VeChat!
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine
            
                height="clac(100vh-66px)"
                projectId="1611b74d-b16b-45f7-9364-ee7594ca2b8d"
                userName="."
                userSecret="."
            />
        </div>
    )
}

export default Chats;

