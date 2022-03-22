import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { signIn } from "../../model/accSlice";
import { postLogin } from '../http/postLogin';
import LoginScreen from '../../view/auth/loginScreen'

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    async function logIn(){
        const acc = await postLogin(email,password);
        console.log(acc);

        if(!('error' in acc))
        {
            const credentials = {
                _id : acc._id,
                name: acc.name,
                email: acc.email,
                role: acc.role,
                addictions: acc.addictions,
                goal: acc.goals,
                routine: acc.routine
            }

            console.log("to redux", credentials);
            dispatch(signIn(credentials));
            console.log("User logged in is " + JSON.stringify(acc));
        }
        else
        {
            alert("Error: Username or Password Incorrect")
        }
    }

    function routeRegister(){
        navigation.push('Register')
    }

    return (
        //give loginScreen all necessary functions
        <LoginScreen 
            setEmail={setEmail} 
            setPassword={setPassword}
            logIn={logIn}
            routeRegister={routeRegister}
        />
    )
}