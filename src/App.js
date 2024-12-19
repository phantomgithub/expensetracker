import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Income } from "./components/Income";
import { Expense } from "./components/Expense";
import { Transactionlist } from "./components/Transactionlist";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import './App.css';
function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <div className="container">
      <Header className="header"/>
      <Balance className="balance"/>
      <div className="holder">
      <Income/><Expense/>

      </div>
      <Transactionlist/>
      <AddTransaction/>

      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
