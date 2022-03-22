import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import RegisterScreen from '../../view/auth/registerScreen'

export default function Register({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    function routeLogin(){
        navigation.goBack()
    }

    return (
        <RegisterScreen
            setEmail={setEmail}
            setPassword={setPassword}
            routeLogin={routeLogin}
        />
    )
}