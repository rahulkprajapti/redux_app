import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state'

const Shop = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Deposit/ Withdraw Money</h2>
      <button className='btn-primary mx-2' onClick={()=>{dispatch(actionCreators.withDrawMoney(100))}}> - </button>
      Update Balance
      <button className='btn-primary mx-2' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}> + </button>
    </div>
  )
}

export default Shop


