import React , {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {

    const  { transactions } = useContext(GlobalContext)
    //get amounts from transactions array
    const amounts = transactions.map(transaction => parseFloat((transaction.amount)))

    //get the sum of the amounts using the reduce function
    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2)

    return(
    <>
    <h1>
    {total}FCFA
    </h1>
    </>
    )
}

export default Balance