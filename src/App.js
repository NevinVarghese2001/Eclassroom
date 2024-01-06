import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      {/* <Login/> 
      <Dashboard/> */}

      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
  
</Routes>
      
    </div>
  );
}

export default App;
