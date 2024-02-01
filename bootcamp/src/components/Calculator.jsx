import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="w-full mx-auto p-4 bg-gray-200 rounded-md h-34 fixed bottom-0">
      <div className="flex flex-col items-center mb-4">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 text-right text-xl bg-white border border-gray-300 rounded-md mb-2"
        />
        <span className="text-blue-600 text-2xl">{result}</span>
      </div>
      <div className="grid grid-cols-4 gap-4 h-45">
        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", 0, ".", "=", "+"].map(
          (value) => (
            <button
              key={value}
              className={`${
                isNaN(value) ? "operator" : "number"
              } ${value === "=" ? "equals col-span-2" : ""}`}
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </button>
          )
        )}
        <button
          className="bg-blue-500 text-white col-span-2 rounded-full"
          onClick={() => handleButtonClick("C")}
        >
          C
        </button>
      </div>
    </div>
    
  );
};

export default Calculator;
