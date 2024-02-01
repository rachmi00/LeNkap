import React from "react";
import { NavLink } from "react-router-dom";
import DateComponent from "./DateComponent";
import { CalendarIcon } from '@heroicons/react/solid';
import BottomNavBar from "./BottomNavBar";
import Calculator from "./Calculator";



function AddTransaction(){

  


   return(
    
<main  className=" md:py-10 md:px-8">
  <div className=" ">
    <div className=" h-34 grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0 bg-blue-400 rounded ">
     <section className="flex mt-1 mx-3">
       <span className="text-white"> <CalendarIcon className="h-6 w-6" /></span> <DateComponent/>
     </section>
     <h1 className="text-2xl mx-4 font-bold text-white mt-1 sm:text-slate-900 md:text-2xl dark:sm:text-white">Hello</h1>
     <section className="mx-4 mb-5">
     <p className="leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Expense:</p>
     <p className="leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Income:</p>
     </section>
    </div>
   <Calculator/>
  </div>
</main>
    
   )
}
export default AddTransaction