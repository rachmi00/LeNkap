import React from "react";
import { NavLink } from "react-router-dom";
// Using @heroicons/react/24/solid for a more modern default icon size
import { HomeIcon, ChartBarIcon, UserIcon, PlusIcon } from "@heroicons/react/24/solid";

function BottomNavBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-2 border-t border-gray-100 shadow-lg z-50">
      <div className="flex justify-around items-center h-14">
        {/* Home Link */}
        <NavLink
          to="/" // Assuming '/' is your Home route (or Dashboard route if Home is the actual Dashboard)
          className={({ isActive }) =>
            `flex flex-col items-center p-2 rounded-lg transition-colors duration-200
             ${isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-500"}`
          }
        >
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </NavLink>

        {/* Signup/User Link (Consider if this really belongs in bottom nav for a logged-in user) */}
        <NavLink
          to="/signup" // Keeping this as per your original code, but often replaced by a Profile/Settings icon
          className={({ isActive }) =>
            `flex flex-col items-center p-2 rounded-lg transition-colors duration-200
             ${isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-500"}`
          }
        >
          <UserIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Profile</span> {/* Changed text to Profile for typical app context */}
        </NavLink>

        {/* Central Add Button */}
        <NavLink
          to="/add"
          className="relative -top-4" // Lift the button visually
        >
          <button className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
            <PlusIcon className="h-8 w-8" /> {/* Using PlusIcon for a cleaner look */}
          </button>
        </NavLink>

        {/* Financial Overview/Reports Link */}
        <NavLink
          to="/dashboard" // Assuming '/dashboard' is where your financial overview is located now
          className={({ isActive }) =>
            `flex flex-col items-center p-2 rounded-lg transition-colors duration-200
             ${isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-500"}`
          }
        >
          <ChartBarIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Reports</span> {/* Renamed for clarity */}
        </NavLink>

        {/* More/Settings Link (Example placeholder) */}
        <NavLink
          to="/settings" // Example route, adjust as needed
          className={({ isActive }) =>
            `flex flex-col items-center p-2 rounded-lg transition-colors duration-200
             ${isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-500"}`
          }
        >
          {/* Using UserIcon as a generic placeholder for "More" or "Settings" */}
          <UserIcon className="h-6 w-6" />
          <span className="text-xs mt-1">More</span>
        </NavLink>
      </div>
    </div>
  );
}

export default BottomNavBar;
