import "./App.css";
import ExpenseTrakerBoard from "./component/ExpenseTrakerBoard/ExpenseTrakerBoard";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ExpenseTrakerBoard />
      <Footer />
    </>
  );
}

export default App;
