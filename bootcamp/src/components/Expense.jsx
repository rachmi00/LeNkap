import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Expense(){
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)

    const expense = amounts.filter(item => item < 0)
                           .reduce((acc, item) => acc + item).toFixed(2)
    return(
        <span>{expense}FCFA</span>
    )
}

export default Expense