
import './App.css';
import { BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom';
import Join from './component/Join/Join'
import Chat from './component/chatjs/chat'
import React from "react";


function App() {



  return (

    <div className="App">
 
 
        <Router>
    <Routes>
      <Route exact path="/chatapp" element={<Join/>}/>
      <Route  path="/chatapp/chat" element={<Chat/>}/>
    </Routes>
    </Router>

    
  
  
    </div>
  );
}

export default App;
