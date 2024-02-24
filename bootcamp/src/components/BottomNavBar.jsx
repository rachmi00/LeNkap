import React from "react";
import { HomeIcon, ChartBarIcon, HeartIcon, UserIcon, FolderIcon, SearchIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

function BottomNavBar() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-300 shadow-lg">
            <div className="flex justify-between items-center">
                <div className="flex">
                    <a href="#" className="text-gray-600 mr-4">
                        <SearchIcon className="h-6 w-6" />
                    </a>
                <NavLink to ={'/signup'} className="mr-4">
                        <UserIcon className="h-6 w-6" />
                    
                </NavLink>
                <NavLink to ={'/chart'}  className=" mr-4">
                        <ChartBarIcon className="h-6 w-6" />
                    </NavLink>
                   
                    
                </div>
               <NavLink to={'/add'}> <button className="bg-blue-500 text-white w-14 h-14 rounded-full">
                    <span className="text-4xl font-bold">+</span>
                </button></NavLink>
            </div>
        </div>
    );
}

export default BottomNavBar;
