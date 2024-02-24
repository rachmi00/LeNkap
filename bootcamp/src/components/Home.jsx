import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DateComponent from "./DateComponent";
import { CalendarIcon } from '@heroicons/react/solid';
import BottomNavBar from "./BottomNavBar";


import Expense from "./Expense";
import Income from "./Income";
import TransactionList from "./TransactionList";
import axios from "axios";


function Home(){
  
  const history = useNavigate();
  const isVisibleStored = localStorage.getItem("isButtonVisible");
  const [isVisible, setIsVisible] = useState(isVisibleStored ? JSON.parse(isVisibleStored) : true);



  useEffect(() => {
    // If the button is hidden, set it to visible after 10 seconds
    if (!isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem("isButtonVisible", "true");
      }, 600000);

      // Clean up the timeout when the component unmounts
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);
  
  
  const hideButton = () => {
    setIsVisible(false);
    localStorage.setItem("isButtonVisible", "false");
    history('/signup');
  }
  

  

   return(
    
<main  className=" md:py-10 md:px-8">
  <div className=" ">
    <div className=" h-34 grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0 bg-blue-400 rounded ">
     <section className="flex mt-1 mx-3">
       <span className="text-white"> <CalendarIcon className="h-6 w-6" /></span> <DateComponent/> 
     </section>
     <h1 className="text-2xl mx-4 font-bold text-white mt-1 sm:text-slate-900 md:text-2xl dark:sm:text-white">Hello Le Nkap User</h1>
     <section className="mx-4 mb-5">
     
     <p className="leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Expense: <Expense/></p>
     <p className="leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Income: <Income/></p>
     </section>
    </div>
    <section>
    <TransactionList/>
            <div className="flex justify-center items-center ">
             
             {
              isVisible &&  <button className="bg-blue-300 rounded p-2 mt-8 text-white" onClick={hideButton}>Click here to get started!</button>
             }
              
            </div>
          
    
    </section>
    
    <BottomNavBar/>
   
   
  </div>
</main>
    
   )
}
export default Home