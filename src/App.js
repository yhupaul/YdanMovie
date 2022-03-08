import React, {useState}   from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Header from "./components/Header";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Group from "./routes/Group";

function App() {

  return (
  <div>
    <Router>  
    <Header />  
    <Routes> 
        <Route path={`/page/:group/:page`} element={<Group />}>
        </Route>        
        <Route path="/movie/:id" element={<Detail />}> 
        </Route>
        <Route path="/react-for-beginners" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
