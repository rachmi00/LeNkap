import React from "react";
import "../App.css"
import { NavLink } from "react-router-dom";




function Login(){

 return(
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">

      <div className=" bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">

      <div className="w-1/2 sm:block hidden">
        <h2 className="font-bold text-2xl text-[#002487]">LeNkap</h2>
        <p className="font-light">track income and daily expenses</p>
      <img src="./PNG/DrawKit Vector Illustration Project Manager (2).png" alt="" className=" rounded-2xl"/>
      </div>

      <div className="sm:w-1/2 px-8">
        <h2 className="font-bold text-2xl">Welcome back to LeNkap! login</h2>
        <p className="text-sm mt-4">
          No account yet?{''}
          <NavLink to='/signup'> <span className="text-blue-300 font-bold">Sign up </span></NavLink> 

        </p>

        <form action="" className="flex flex-col gap-4">
         
          <input className="p-2 rounded-xl border mt-8" type="email" name="email" placeholder="name@email.com"/>
          <input className=" p-2 rounded-xl border"type="password" name="password" placeholder="password"/>
          <button className="bg-[#002487] rounded-xl text-white p-2"> Log in</button>
        </form>

        <div></div>
      </div>

      </div>
    </section>
 )
}

export default Login