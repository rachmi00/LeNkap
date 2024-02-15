import React , {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {

    const  { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => parseFloat((transaction.amount)))

    console.log(amounts)

    const total = amounts.reduce((acc, item) => acc + item).toFixed(2)

    console.log("total:",total)
    return(
    <>
    <h1>
    {total}FCFA
    </h1>
    </>
    )
}

export default Balance