import React, { use, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transactionlist = () => {
  const { transactions} = useContext(GlobalContext);
const{deleteTransaction} = useContext(GlobalContext);
  console.log(deleteTransaction); // Note: Corrected "transations" to "transactions"


  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(t => (
          <li className={t.amount<0?"minus":"plus"} key={t.id}>
            {t.text}
            
            <span>{t.amount<0?"-":"+"}{Math.abs(t.amount)}</span>
            <button className="delete" onClick={()=>deleteTransaction(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};
