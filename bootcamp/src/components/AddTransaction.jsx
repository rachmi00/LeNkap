import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import DateComponent from "./DateComponent";
import { FolderIcon } from '@heroicons/react/solid';
import BottomNavBar from "./BottomNavBar";




function AddTransaction(){

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)


   return(
    
<main  className=" md:py-10 md:px-8">
  <div className=" ">
    <div className=" h-34 grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0 bg-blue-400 rounded ">
     <section className="flex mt-1 mx-3">
    
     </section>
    
     <section className=" flex justify-between mx-4 mb-5">
     <NavLink to ={'/category'} className="mr-4 text-white">
                        <FolderIcon className="h-6 w-6" />
                    
                </NavLink>
     </section>
    </div>
    <div>
       <h3> Add new transaction</h3>
       <form action>
        <label htmlFor="text">Text</label>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..."/>

        <div>
          <label htmlFor="amount"> Amount <br />
          (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="enter amount..." />
        </div>
        <button>add transaction</button>
       </form>
    </div>
  
  </div>
</main>
    
   )
}
export default AddTransaction