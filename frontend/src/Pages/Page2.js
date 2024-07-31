import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MulDivReducer } from '../_reducers/MulDivReducer'

export default function Page2() {
  //1.hooks area

  const x = useSelector((storeValue)=>{return storeValue})
   const dispatch = useDispatch()

  //2.function defination area


  //3.return statement
  return (
    <div style={{textAlign:'center'}}>Page1
    {console.log('x--->',x)}
      <h1>{x.MulDivReducer.value}</h1>
      <button onClick={()=>{dispatch({type:'MULBY2', payload:2})}}>*2</button>
      <button onClick={()=>{dispatch({type:'MULBY5', payload:5})}}>*5</button>
      <button onClick={()=>{dispatch({type:'RESET', payload:0})}}>Reset</button>
      <button onClick={()=>{dispatch({type:'DIVBY2', payload:2})}}>/2</button>
      <button onClick={()=>{dispatch({type:'DIVBY5', payload:5})}}>/5</button>
    </div>
  )
}
