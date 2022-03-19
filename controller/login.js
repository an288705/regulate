import React, {useState} from 'react'
import LoginScreen from '../view/auth/loginScreen'

export default function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        //give loginScreen all necessary functions
        <LoginScreen 
            setEmail={setEmail} 
            setPassword={setPassword}
        />
    )
}