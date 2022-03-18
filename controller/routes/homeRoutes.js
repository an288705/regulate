import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import HomeScreen from '../../view/home/homeScreen';
import LoginScreen from '../../view/login/loginScreen'

export default function homeRoutes() {
    const { acc } = useSelector(state=>state);

    return (
        <>
            {
                acc.loggedIn
                ?
                <HomeScreen/>
                :
                <LoginScreen/>
            }
        </>
    )
}