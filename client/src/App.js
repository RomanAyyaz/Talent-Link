import './App.css';
import LandingPage from './Components/User/LandingPage/LandingPage';
import Login from './Components/User/Registration/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChangePassword from './Components/User/Registration/ChangePassword';
import InstructorDashBoard from './Components/CourseInstructor/InstructorDashBoard';
import AddCourse from './Components/CourseInstructor/AddCourse/AddCourse';
import Resume from './Components/ResumeBuilder/Resume';
import EditResume from './Components/ResumeBuilder/ResumeComponents/EditResume';
import ViewResume from './Components/ResumeBuilder/ResumeComponents/ViewResume';
import CompanyRegistration from './Components/Company/Company-Registration/CompanyRegistration';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      {/* <InstructorDashBoard/> */}
      {/* <Routes>
      <Route path='/addCourse' element ={<AddCourse/>}/>  
      </Routes> */}
      {/* </BrowserRouter> */}
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* User Routes */}
          <Route path='/' element={<Login />} />
          <Route path='/changePassword' element={<ChangePassword />} />
          <Route path='/landingPage' element={<LandingPage />} />
          <Route path='/resumeBuilder' element={<Resume />} />
          <Route path='/resume/:id/edit' element={<EditResume />} />
          <Route path='/resume/:id/view' element={<ViewResume />} />
          {/* Company Routes */}
          <Route path='/registerCompany' element = {<CompanyRegistration/>}/>
          <Route path='/dashboardCompany' element ={<InstructorDashBoard/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
