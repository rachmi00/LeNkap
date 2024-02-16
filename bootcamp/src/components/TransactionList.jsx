import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList(){
    const {transactions} = useContext(GlobalContext)
    
    

    return(
       <div>
         <h3 className="text-2xl font-bold text-blue-400 mb-4 mx-4 mt-4">History</h3>
        <ul >
            {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction}/>))}
            
        </ul>
       </div>
    )
    }
export default TransactionList