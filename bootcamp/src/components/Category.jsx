import React from "react";
import { NavLink } from "react-router-dom";
import DateComponent from "./DateComponent";
import { CalendarIcon } from '@heroicons/react/solid';



function Category(){

  


   return(
    
<main  className=" md:py-10 md:px-8">
  <div className=" ">
    <div className=" h-34 grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0 bg-blue-400 rounded ">
     <section className="flex mt-1 mx-3">
       
     </section>
     
     <h1 className="text-2xl mx-4  text-white mt-1 sm:text-slate-900 md:text-2xl dark:sm:text-white"><NavLink to={'/'} className='mr-4'>x</NavLink>Category Settings</h1>
     <section className="mx-4 mb-5">
     <div className="flex justify-around">
     <p className="leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400 mr-4">Expenses()</p>
     <p className="leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Income()</p>
     </div>
     </section>
    </div>
    
   
  </div>
</main>
    
   )
}
export default Category