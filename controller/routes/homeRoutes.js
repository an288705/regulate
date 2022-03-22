import React from 'react'
import { useSelector } from 'react-redux'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '../../view/home/homeScreen';
import Login from '../auth/login';
import Register from '../auth/register';

const AuthStack = createNativeStackNavigator();

export default function homeRoutes() {
    const { acc } = useSelector(state=>state);

    return (
        <>
            {
                acc.loggedIn
                ?
                <HomeScreen/>
                :
                <AuthStack.Navigator initialRouteName='Login'>
                    <AuthStack.Screen name='Login' component={Login} options={{headerShown:false}}/>
                    <AuthStack.Screen name='Register' component={Register} options={{headerShown:false}}/>
                </AuthStack.Navigator>
            }
        </>
    )
}