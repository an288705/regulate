import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addAddiction } from '../../model/accSlice';
import AddictionScreen from '../../view/home/addictionScreen'

export default function Addiction() {
    const { acc } = useSelector(state=>state);

    //add addiction by adding a new row to table
    //and typing it in
    function addAddiction(){

    }
    console.log(acc.addictions);
    return (
        <AddictionScreen
            addictions={acc.addictions}
        />
    )
}