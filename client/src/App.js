import './App.css';
import LandingPage from './Components/User/LandingPage/LandingPage';
import Login from './Components/User/Registration/Login';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
      <Routes>
      <Route path='/' element ={<LandingPage/>}/>
      <Route path='/login' element ={<Login/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
