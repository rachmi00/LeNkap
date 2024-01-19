import React from "react";
import "../App.css"
import { NavLink, useNavigate } from "react-router-dom";



function Signup(){

 return(
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">

      <div className=" bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">

      <div className="w-1/2 sm:block hidden">
        <h2 className="font-bold text-2xl text-[#002487]">LeNkap</h2>
        <p className="font-light">track income and daily expenses</p>
      <img src="./PNG/DrawKit Vector Illustration Project Manager (2).png" alt="" className=" rounded-2xl"/>
      </div>

      <div className="sm:w-1/2 px-8">
        <h2 className="font-bold text-2xl">sign up to leNkap</h2>
        <p className="text-sm mt-4">
          are you already a member?
          <NavLink to='/login'> <span className="text-blue-300 font-bold">Login </span></NavLink> 

        </p>

        <form action="" className="flex flex-col gap-4">
          <input className="p-2 mt-8 rounded-xl border" type="text" name="name" placeholder=" John Doe"/>
          <input className="p-2 rounded-xl border" type="email" name="email" placeholder="name@email.com"/>
          <input className=" p-2 rounded-xl border"type="password" name="password" placeholder="password"/>
          <button className="bg-[#002487] rounded-xl text-white p-2"> SignUp</button>
        </form>

        <div></div>
      </div>

      </div>
    </section>
 )
}

export default Signup