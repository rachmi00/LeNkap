import React from "react";
import { NavLink } from "react-router-dom";


function Transactions(){




   return(

    <div className="flex flex-col justify-center items-center">
    <p className="font-bold text-2xl mx-8 mt-8"> this is the homepage </p>
    <NavLink to={'/signup'}><button className="bg-blue-300 rounded p-2 mt-8 text-white ">click here to get started</button></NavLink>
    </div>
   )
}
export default Transactions