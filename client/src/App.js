import './App.css';
import LandingPage from './Components/User/LandingPage/LandingPage';
import Login from './Components/User/Registration/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChangePassword from './Components/User/Registration/ChangePassword';
import Resume from './Components/ResumeBuilder/Resume';
import EditResume from './Components/ResumeBuilder/ResumeComponents/EditResume';
import ViewResume from './Components/ResumeBuilder/ResumeComponents/ViewResume';
import CompanyRegistration from './Components/Company/Company-Registration/CompanyRegistration';
import CompanyDashboard from './Components/Company/CompanyDashboard';
import Courses from './Components/User/Courses/Courses';
import CourseMainPage from './Components/User/Courses/CourseMainPage/CourseMainPage';
import UserDashboard from './Components/User/UserDashboard/UserDashboard'
import Jobs from './Components/User/Job/Jobs';
import Main from './Components/User/Job/JobMainPage/Main';
import Success from './Components/Payment/Success'
import InterviewMainPage from './Components/Interview/InterviewMainPage';
import ContactPage from './Components/User/Contact/ContactPage';
import ProfileComponent from './Components/User/UserProfile/ProfileComponent';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* User Routes */}
          <Route path='/userProfile' element = {<ProfileComponent/>}/>
          {/* Registration routes */}
          <Route path='/' element={<Login />} />
          <Route path='/changePassword' element={<ChangePassword />} />
          <Route path='/landingPage' element={<LandingPage />} />
          <Route path='/userDashboard/*' element={<UserDashboard/>}/>

          {/* Resume builder routes */}
          <Route path='/resumeBuilder' element={<Resume />} />
          <Route path='/resume/:id/edit' element={<EditResume />} />
          <Route path='/resume/:id/view' element={<ViewResume />} />

          {/* Courses routes */}
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/courses/:id' element ={ <CourseMainPage/>}/>
          <Route path='/success' element = {<Success/>}/>
          
          {/* Jobs routes */}
          <Route path='/jobs' element = {<Jobs/> } />
          <Route path='/jobs/details/:id' element={<Main/>}/>

          {/* Company Routes */}
          <Route path='/registerCompany' element={<CompanyRegistration />} />
          <Route path='/dashboardCompany/*' element={<CompanyDashboard />} />

          {/* Interview route */}
          <Route path='/interviewPreparation' element = {<InterviewMainPage/>}/>

          {/* Contact page details */}
          <Route path='/contact' element = {<ContactPage/>}/> 
                 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
