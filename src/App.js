import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Header from "./components/Header";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return(
  <div>
    <Router>
    <Header />  
      <Routes>
        <Route path="/movie/:id" element={<Detail />}> 
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
