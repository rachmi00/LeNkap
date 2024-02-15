import React from "react";
import { NavLink } from "react-router-dom";


function Transaction({transaction}){


    const sign = transaction.amount < 0 ? '-': '+';

   return(
      <li>
      {transaction.text}<span>{sign}FCFA{Math.abs(transaction.amount)}</span><button>x</button>
  </li>
   )
}
export default Transaction