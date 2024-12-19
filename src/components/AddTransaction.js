import React,{useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const[text,setText] = useState("");
    const[amt,setAmt] = useState(0);
    const {addTransaction}=useContext(GlobalContext);
  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={(e)=>{e.preventDefault();
        const newTrasaction = {
          id:Math.floor(Math.random()*100000),
          text,
          amount:+amt
        }
        addTransaction(newTrasaction);
      }}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" value={amt} onChange={(e)=>{setAmt(e.target.value)}}placeholder="Enter amount..." />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </div>
  );
};
