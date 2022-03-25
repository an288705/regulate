import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addAddiction, editAddiction } from '../../model/accSlice';
import AddictionScreen from '../../view/home/addictionScreen'

export default function Addiction() {
    const { acc } = useSelector(state=>state);

    //add addiction by adding a new row to table
    //and automatic focus. onBlur, send http request
    function addAddiction(){

    }

    //onFocus, change text in textbox. 
    //onBlur, send http request 
    function editAddiction(){

    }

    return (
        <AddictionScreen
            addictions={acc.addictions}
        />
    )
}