import React, {useContext}from "react";
import { GlobalContext } from "../context/GlobalState";

function Income(){
    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts.filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0).toFixed(2)
    return(
        <span>{income}FCFA</span>
    )
}

export default Income