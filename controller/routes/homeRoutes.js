import React from 'react'
import { useSelector } from 'react-redux'
import HomeScreen from '../../view/home/homeScreen';
import Login from '../login';

export default function homeRoutes() {
    const { acc } = useSelector(state=>state);

    return (
        <>
            {
                acc.loggedIn
                ?
                <HomeScreen/>
                :
                <Login/>
            }
        </>
    )
}