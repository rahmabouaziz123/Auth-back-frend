
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { Profile } from './components/Profile';


function App() {
  return (
    <div className="App">

<Router>
       <Routes>
         <Route path="/" element={<SignUp/>}/>

         <Route path="/login" element={<Login/>}  />
         <Route path="/profile" element={<Profile/>}/>  
        
       </Routes>
     </Router>

     
    </div>
  );
}

export default App;
