import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from '../CounterSlice'

function Counter() {
    const [amount,setAmount] = useState(0)
    const dispatch =useDispatch()
      
       const count = useSelector(state=>state.counterReducer.count)
       const handleIncrementByAmount = ()=>{
        if(amount){
            dispatch(incrementByAmount(amount))
        }else{
            alert("enter a valid amount")
        }
       }
       
  return (
        
    <div  style={{width:'700px'}} className='border rounded p-5 text-center  mx-auto mt-5' >
  
    <h1 style={{ color: 'white', fontSize: '200px' }}>{count}</h1>
  
  <div style={{width:'500px'}} className='d-flex justify-content-between mt-5'>
    <button onClick={()=>dispatch(decrement())} type="button" className="btn btn-warning m-5 ">degrement</button>
    <button onClick={()=>dispatch(reset())}  type="button" className="btn btn-danger m-5">reset</button>
    <button onClick={()=>dispatch(increment())}  type="button" className="btn btn-success m-5">Increment</button>
  </div>
  <div className=" d-flex justify-content-between  mt-3 ">
  <input onChange={e=>setAmount(e.target.value)} style={{color:'black',width:'400px'}} type="text" class="form-control" id="floatingInput" placeholder="increment the count"/>
  <button onClick={handleIncrementByAmount} type="button" class="btn btn-primary ms-4">Increment By Amount</button>

</div>
</div>
  )
}

export default Counter