import "./App.css";
import { Routes,Route } from "react-router-dom";
import Mockman from "mockman-js";
import {Home,Profile,SignUp,SignIn,Feed, Explore, Bookmark,NotFound} from './pages'
import {Navbar,PrivateRoute} from './components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position='bottom-right'
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme='colored'
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/mockman' element={<MockAPI/>}></Route>
        <Route path='/user/:username' element={<PrivateRoute><Profile/></PrivateRoute>}></Route>
        <Route path='/explore' element={<PrivateRoute><Explore/></PrivateRoute>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='userfeed' element={<PrivateRoute><Feed/></PrivateRoute>}></Route>
        <Route path='bookmarks' element={<PrivateRoute><Bookmark/></PrivateRoute>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
