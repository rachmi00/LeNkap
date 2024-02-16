import React ,{useContext} from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";


function Transaction({transaction}){
     const{deleteTransaction} = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-': '+';

   return(
      <li className="flex items-center justify-between border border-gray-300 shadow-md p-3 rounded-lg mb-4 ">
      <div className="flex items-center">
        <span className="mr-4 text-lg font-semibold">{transaction.text}</span>
        <span className={`text-${sign === '+' ? 'green' : 'red'}-500 text-lg font-semibold`}>{sign}FCFA{Math.abs(transaction.amount)}</span>
      </div>
      <button className="bg-red-500 rounded p-2 text-white" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
    
   )
}
export default Transaction