import React from "react";
import { NavLink } from "react-router-dom";

// --- INLINE SVG ICON COMPONENTS ---
// These replace @heroicons/react icons to remove external dependency

const HomeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor" // For solid icons, use fill="currentColor"
    {...props}
  >
    <path d="M11.47 3.84a.75.75 0 0 1 1.06 0l8.69 8.69a1.5 1.5 0 0 1 .43 1.06V20.25a2.25 2.25 0 0 1-2.25 2.25h-5.377a.75.75 0 0 1-.75-.75V16.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v4.5c0 .414-.336.75-.75.75H3.375A2.25 2.25 0 0 1 1.125 20.25V13.59a1.5 1.5 0 0 1 .43-1.06l8.69-8.69Z" />
  </svg>
);

const ChartBarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 9a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V15Zm6-.75a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h.75a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.75Zm3.75-3.75a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 .75.75h.75a.75.75 0 0 0 .75-.75V11.25a.75.75 0 0 0-.75-.75h-.75Z" clipRule="evenodd" />
  </svg>
);

const UserIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
  </svg>
);

const PlusIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path fillRule="evenodd" d="M12 5.25a.75.75 0 0 1 .75.75v5.25H18a.75.75 0 0 1 0 1.5h-5.25V18a.75.75 0 0 1-1.5 0v-5.25H6a.75.75 0 0 1 0-1.5h5.25V6a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
  </svg>
);

// --- END INLINE SVG ICON COMPONENTS ---

function BottomNavBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-2 border-t border-gray-100 shadow-lg z-50">
      <div className="flex justify-around items-center h-14">
        {/* Home Link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center p-2 rounded-lg transition-colors duration-200
             ${isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-500"}`
          }
        >
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </NavLink>

        {/* Profile/User Link */}
        <NavLink
          to="/signup" // Keeping this as a "Profile" link for now
          className={({ isActive }) =>
            `flex flex-col items-center p-2 rounded-lg transition-colors duration-200
             ${isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-500"}`
          }
        >
          <UserIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Profile</span>
        </NavLink>

        {/* Central Add Button */}
        <NavLink
          to="/add"
          className="relative -top-4" // Lift the button visually
        >
          <button className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
            <PlusIcon className="h-8 w-8" />
          </button>
        </NavLink>

        {/* Reports Link */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center p-2 rounded-lg transition-colors duration-200
             ${isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-500"}`
          }
        >
          <ChartBarIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Reports</span>
        </NavLink>

        {/* More/Settings Link (Example placeholder) */}
        <NavLink
          to="/settings" // Example route, adjust as needed
          className={({ isActive }) =>
            `flex flex-col items-center p-2 rounded-lg transition-colors duration-200
             ${isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-500"}`
          }
        >
          <UserIcon className="h-6 w-6" /> {/* Using UserIcon as a generic placeholder for "More" or "Settings" */}
          <span className="text-xs mt-1">More</span>
        </NavLink>
      </div>
    </div>
  );
}

export default BottomNavBar;
