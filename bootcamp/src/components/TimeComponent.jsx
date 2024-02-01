import React from "react";

function TimeComponent(){
   const currentTime = new Date().toLocaleTimeString();
    return(
        <div>
            <h1 className="text-md text-white font-bold">{currentTime} Balance</h1>
        </div>
    )
}

export default TimeComponent;