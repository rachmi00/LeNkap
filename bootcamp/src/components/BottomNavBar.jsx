import React from "react";

function BottomNavBar() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-300">
            <div className="flex justify-between items-center">
                <div className="flex">
                    <a href="#" className="text-gray-800 mr-4">Icon 1</a>
                    <a href="#" className="text-gray-800 mr-4">Icon 2</a>
                    <a href="#" className="text-gray-800 mr-4">Icon 3</a>
                    <a href="#" className="text-gray-800 mr-4">Icon 4</a>
                </div>
                <button className="bg-blue-500 text-white p-4 rounded-full">
                    <span className="text-lg font-bold">+</span>
                </button>
            </div>
        </div>
    );
}

export default BottomNavBar;
