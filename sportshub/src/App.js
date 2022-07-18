import "./App.css";
import { Routes,Route } from "react-router-dom";
import Mockman from "mockman-js";
import {Home,Profile,SignUp,SignIn} from './pages'
import {Navbar} from './components'


function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/mockman' element={<MockAPI/>}></Route>
        <Route path='/profile/:user' element={<Profile/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
