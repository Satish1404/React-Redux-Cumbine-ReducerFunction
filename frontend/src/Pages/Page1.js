import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Page1() {
    //1.hook area
   const snd = useSelector((storeValue)=>{return storeValue})
   const dispatch = useDispatch()

    //2.function definatioan area


    //3.return statement
  return (
    <div style={{textAlign:'center'}}>Page1
    {console.log('snd--->',snd)}
      <h1>{snd.AddSubReducer.value}</h1>
      <button onClick={()=>{dispatch({type:'ADD', payload:1})}}>+</button>
      <button onClick={()=>{dispatch({type:'RESET', payload:0})}}>Reset</button>
      <button onClick={()=>{dispatch({type:'SUB', payload:1})}}>-</button>
    </div>
  )
}
