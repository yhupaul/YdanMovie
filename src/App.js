import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Header from "./components/Header";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Group from "./routes/Group";
import Search from "./routes/Search";

function App() {

  return (
  <div>
    <Router>  
    <Header />  
    <Routes>
    <Route path='/YdanMovie' exact component={Search}/>
    <Route path='/YdanMovie' exact component={Group}/>
    <Route path='/YdanMovie' exact component={Detail}/>
    <Route path='/YdanMovie' exact component={Home}/>
        {/* <Route path={`/search/:search`} element={<Search />}>
        </Route>
        <Route path={`/page/:group/:page`} element={<Group />}>
        </Route>        
        <Route path="/movie/:id" element={<Detail />}> 
        </Route>
        <Route path="/YdanMovie" element={<Home />}>
        </Route> */}
      </Routes>
    </Router>
  </div>
  );
}

export default App;
