import ExpenseBalanceBoard from "../ExpenseBalanceBoard/ExpenseBalanceBoard";
import ExpenseBoard from "../ExpenseBoard/ExpenseBoard";
import ExpenseTrakerForm from "../ExpenseTrakerForm/ExpenseTrakerForm";
import IncomeBoard from "../incomeBoard/incomeBoard";

const ExpenseTrakerBoard = () => {
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

            <ExpenseBoard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpenseTrakerBoard;
