/* eslint-disable no-unused-vars */
import { useState } from "react";
import ExpenseBalanceBoard from "../ExpenseBalanceBoard/ExpenseBalanceBoard";
import ExpenseBoard from "../ExpenseBoard/ExpenseBoard";
import ExpenseTrakerForm from "../ExpenseTrakerForm/ExpenseTrakerForm";
import IncomeBoard from "../incomeBoard/incomeBoard";

const ExpenseTrakerBoard = () => {
  const initialExpense = [
    {
      id: crypto.randomUUID,
      categorys: [
        "education",
        "health",
        "food",
        "bil",
        "insurance",
        "tax",
        "transport",
        "telephone",
      ],
      amount: 1000,
      date: new Date(),
    },
  ];

  const [expenses, setExpenses] = useState([initialExpense]);

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Expense traker form start */}

        <ExpenseTrakerForm />

        {/* Expense traker form end */}

        <div className="lg:col-span-2">
          {/* Expense balance Board start  */}
          <ExpenseBalanceBoard />
          {/* Expense balance Board end  */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <IncomeBoard />

            <ExpenseBoard expenses={expenses} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpenseTrakerBoard;
