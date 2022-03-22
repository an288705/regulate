import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { signIn } from "../../model/accSlice";
import { postLogin } from '../http/postLogin';
import LoginScreen from '../../view/auth/loginScreen'

export default function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    async function logIn(){
        const account = await postLogin(email,password);
        console.log(account);

        if(account)
        {
            const credentials = {
                _id : account._id,
                jwt: account.jwt,
                name: account.name,
                email: account.email,
                role: account.role,
                addictions: account.addictions,
                goal: account.goals,
                routine: account.routine
            }

            console.log("to redux", credentials);
            dispatch(signIn(credentials));
            console.log("User logged in is " + JSON.stringify(account));
        }
    }

    return (
        //give loginScreen all necessary functions
        <LoginScreen 
            setEmail={setEmail} 
            setPassword={setPassword}
            logIn={logIn}
        />
    )
}