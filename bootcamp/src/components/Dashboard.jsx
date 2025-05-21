"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { CalendarIcon, BarChart3Icon, TrendingUpIcon, ArrowUpIcon, ArrowDownIcon } from 'lucide-react'
import { motion } from "framer-motion"
import DateComponent from "./date-component"
import BottomNavBar from "./bottom-nav-bar"
import Expense from "./expense"
import Income from "./income"
import TransactionList from "./transaction-list"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  const router = useRouter()
  const isVisibleStored = typeof window !== "undefined" ? localStorage.getItem("isButtonVisible") : null
  const [isVisible, setIsVisible] = useState(isVisibleStored ? JSON.parse(isVisibleStored) : true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    if (!isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(true)
        localStorage.setItem("isButtonVisible", "true")
      }, 600000) // 10 minutes
      return () => clearTimeout(timeout)
    }
  }, [isVisible])

  const hideButton = () => {
    setIsVisible(false)
    localStorage.setItem("isButtonVisible", "false")
    router.push("/signup")
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <div className="max-w-6xl mx-auto w-full flex-grow px-4 sm:px-6 lg:px-8 pt-4 pb-20 md:pb-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={fadeIn}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-b-3xl md:rounded-3xl shadow-xl p-6 sm:p-8 mb-8 md:mb-10 mt-0 md:mt-8"
        >
          <section className="flex items-center space-x-2 text-blue-100 mb-4">
            <CalendarIcon className="h-5 w-5" />
            <DateComponent />
          </section>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <motion.h1
              className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Welcome to Le Nkap
              <span className="block text-lg sm:text-xl font-normal text-blue-100 mt-1 opacity-90">
                Your personal finance tracker
              </span>
            </motion.h1>

            {isVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-white text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700 font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md flex items-center justify-center text-lg"
                  onClick={hideButton}
                >
                  Get Started
                </Button>
              </motion.div>
            )}
          </div>

          {/* Summary Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="bg-white/15 backdrop-blur-md rounded-2xl p-5 shadow-lg flex flex-col"
            >
              <p className="text-blue-100 text-sm font-medium mb-2">Total Expense</p>
              <div className="flex items-center">
                <div className="p-3 bg-red-500/30 rounded-lg mr-4">
                  <ArrowDownIcon className="h-6 w-6 text-red-200" />
                </div>
                <Expense className="text-2xl sm:text-3xl font-bold text-white tracking-tight" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="bg-white/15 backdrop-blur-md rounded-2xl p-5 shadow-lg flex flex-col"
            >
              <p className="text-blue-100 text-sm font-medium mb-2">Total Income</p>
              <div className="flex items-center">
                <div className="p-3 bg-green-500/30 rounded-lg mr-4">
                  <ArrowUpIcon className="h-6 w-6 text-green-200" />
                </div>
                <Income className="text-2xl sm:text-3xl font-bold text-white tracking-tight" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Financial Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Financial Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500">Savings Rate</h3>
                  <div className="p-2 bg-blue-100 rounded-full">
                    <TrendingUpIcon className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">24%</p>
                <p className="text-sm text-green-600 flex items-center mt-2">
                  <ArrowUpIcon className="h-3 w-3 mr-1" /> 3% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500">Monthly Budget</h3>
                  <div className="p-2 bg-purple-100 rounded-full">
                    <BarChart3Icon className="h-4 w-4 text-purple-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">75% Used</p>
                <p className="text-sm text-gray-600 mt-2">5 days remaining</p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-500">Top Category</h3>
                  <div className="p-2 bg-amber-100 rounded-full">
                    <BarChart3Icon className="h-4 w-4 text-amber-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">Groceries</p>
                <p className="text-sm text-gray-600 mt-2">32% of total expenses</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Transactions Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-800 font-medium">
              View All
            </Button>
          </div>
          <TransactionList />
        </motion.section>
      </div>

      <BottomNavBar />
    </main>
  )
}
