import React from "react";
import Balance from "./Balance";

function DateComponent(){
   const currentDate = new Date().toLocaleDateString();
    return(
        <div>
            <h1 className="text-md text-white font-bold">{currentDate} Balance:<Balance/> </h1>
        </div>
    )
}

export default DateComponent;