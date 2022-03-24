import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { postUser } from '../http/postUser';
import { signIn } from "../../model/accSlice";
import RegisterScreen from '../../view/auth/registerScreen'

export default function Register({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    async function register(){
        const acc = await postUser(email,password);

        if(!('error' in acc))
        {
            //if !verified, ask user to verify email
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

    function routeLogin(){
        navigation.goBack()
    }

    return (
        <RegisterScreen
            setEmail={setEmail}
            setPassword={setPassword}
            register={register}
            routeLogin={routeLogin}
        />
    )
}