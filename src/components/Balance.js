import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = ({className}) => {
    const {transactions} = useContext(GlobalContext);
    const amount = transactions.map(t=>t.amount);
    let sum = 0;
    for(let s of amount){
        sum+=s;
    }
    console.log(sum);
      return (
    <div className={className}>
        <h1>Your Balance</h1>
        <h2>${sum}</h2>
    </div>
  )
}
