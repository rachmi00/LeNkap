import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/solid";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddTransaction() {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [type, setType] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const history = useNavigate();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmitCategory = (e) => {
    e.preventDefault();

    const newCategory = {
      id: Math.floor(Math.random() * 100000000),
      name: categoryName,
    };

    setCategories([...categories, newCategory]);
    setCategoryName("");
  };

  const onSubmitTransaction = async (e) => {
    e.preventDefault();

    const formDatas = { name, amount, categoryId, type };
    const authToken = localStorage.getItem('token');

    
    try {
      const response = await axios.post('https://le-nkap-v1.onrender.com/transactions', formDatas, 
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // Assuming you store the token in localStorage
          }},);
      
      

      console.log(response.data);
    }
    catch (error) {
      console.error(error)
    }
    

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name,
      amount: +amount,
      category: categories.find((cat) => cat.id === parseInt(categoryId)),
    };

    addTransaction(newTransaction);

    setShowPopup(true);

    // Clear form fields
    setName("");
    setAmount("");
    setCategoryId("");

    // Navigate back to the home screen after a delay
    setTimeout(() => {
      setShowPopup(false);
      history("/");
    }, 1000); // 1000 milliseconds = 1 second

  };

  return (
    <main className="md:py-10 md:px-8">
      <div className=" ">
        <div className=" h-34 grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0 bg-blue-400 rounded ">
          <section className="flex mt-1 mx-3"></section>

          <section className=" flex justify-center mx-4 mb-5">

            <NavLink to={"/"} className="mr-4 text-white">
              <HomeIcon className="h-6 w-6" />
            </NavLink>
          </section>
        </div>
        <div className="min-h-screen flex flex-col justify-center items-center p-4">
          {showPopup && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-md shadow-md">
                <p className="text-lg font-semibold mb-4">
                  Transaction added successfully!
                </p>
              </div>
            </div>
          )}
           <div className="w-full sm:max-w-md bg-white p-6 rounded-md shadow-md mt-8">
            <h3 className="text-lg font-semibold mb-4">Add new category</h3>
            <form onSubmit={onSubmitCategory} className="space-y-4">
              <div>
                <label
                  htmlFor="categoryName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category name
                </label>
                <input
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Enter category name..."
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Category
              </button>
            </form>
          </div>
          <div className="w-full sm:max-w-md bg-white p-6 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-4">Add new transaction</h3>
            <form onSubmit={onSubmitTransaction} className="space-y-4">
              <div>
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Transaction name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter text..."
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="type" className="block text-md font-mediun text-gray-700"> Type</label>
              <input type="text" name="type" value={type}  onChange={(e)=>setType(e.target.value)} placeholder="income or expense?"
                 className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount
                  <span className="text-gray-500 text-xs ml-1">
                    (negative - expense, positive - income)
                  </span>
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount..."
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="">Select category...</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>

              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add Transaction
              </button>
            </form>
          </div>
         
        </div>
      </div>
    </main>
  );
}

export default AddTransaction;
