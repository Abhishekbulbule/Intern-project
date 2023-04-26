import { useState } from "react";
import "./App.css";
import Query1 from './Components/Query1'
import Query2 from './Components/Query2'
import Query3 from './Components/Query3'
import Query4 from './Components/Query4'
import Query5 from './Components/Query5'
import Header from "./Components/Header";

function App() {

  const [selectedOp, setSelectedOp] = useState("query1");
  
  function showQueryTable() {
    switch (selectedOp) {
      case "query1":
        return <Query1/>;
      
      case "query2":
        return <Query2/>;
      case "query3":
        return <Query3/>;
      case "query4":
        return <Query4/>;
      case "query5":
        return <Query5/>;

      default:
        return null;
    }
  }
  return (
    <div className="App">
      <Header cls="title-heading" title="Data Fetch Project"/>
      <div className="container">
        <select
          className="select"
          value={selectedOp}
          onChange={(e) => {
            setSelectedOp(e.target.value);
          }}
        >
          <option  value={"query1"}>Query : 1</option>
          <option value={"query2"}>Query : 2</option>
          <option value={"query3"}>Query : 3</option>
          <option value={"query4"}>Query : 4</option>
          <option value={"query5"}>Query : 5</option>
        </select>
      </div>
      {showQueryTable()}
    </div>
  );
}

export default App;
