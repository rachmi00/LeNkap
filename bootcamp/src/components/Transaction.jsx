import React ,{useContext} from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";


function Transaction({transaction}){
     const{deleteTransaction} = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-': '+';

   return(
      <li>
      {transaction.text}<span>{sign}FCFA{Math.abs(transaction.amount)}</span><button className="bg-red-300 rounded p-2 mt-8 text-white mx-8" onClick={()=>deleteTransaction(transaction.id)}>x</button>
  </li>
   )
}
export default Transaction