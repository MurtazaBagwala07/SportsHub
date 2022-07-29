import "./App.css";
import { Routes,Route } from "react-router-dom";
import Mockman from "mockman-js";
import {Home,Profile,SignUp,SignIn,Feed, Explore, Bookmark,NotFound} from './pages'
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
        <Route path='/user/:username' element={<Profile/>}></Route>
        <Route path='/explore' element={<Explore/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='userfeed' element={<Feed/>}></Route>
        <Route path='bookmarks' element={<Bookmark/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
