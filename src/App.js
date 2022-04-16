
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <h1>Welcome To My WAA Course!</h1>
        <Dashboard/>
    </div>
   </BrowserRouter>

  );
}

export default App;
