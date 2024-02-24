import React, { useState } from "react";
import "../App.css"
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";




function Login(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const formData ={ email, password};
   

    try{
      const response = await axios.post('https://le-nkap-v1.onrender.com/auth', formData);
      const {token} = response.data
      localStorage.setItem('token', token);
      console.log(response.data);
    }
    catch(error){
      console.error(error);
    }
    navigate('/')
  }

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

        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
         
          <input className="p-2 rounded-xl border mt-8" type="email" name="email" placeholder="name@email.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input className=" p-2 rounded-xl border"type="password" name="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button className="bg-[#002487] rounded-xl text-white p-2" type="submit"> Log in</button>
        </form>

        <div></div>
      </div>

      </div>
    </section>
 )
}

export default Login