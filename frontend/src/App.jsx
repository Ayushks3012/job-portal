import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes, Navigate } from 'react-router-dom'

import LandingPage from "./pages/LandingPage/LandingPage"
import SignUp from "./pages/Auth/SignUp"
import Login from "./pages/Auth/Login"

import JobSeekerDashboard from "./pages/JobSeeker/JobSeekerDashboard"
import JobDetails from "./pages/JobSeeker/JobDetails"
import SavedJobs from "./pages/JobSeeker/SavedJobs"
import UserProfile from "./pages/JobSeeker/UserProfile"

import EmployerDashboard from "./pages/Employer/EmployerDashboard"
import JobPostingForm from "./pages/Employer/JobPostingForm"
import ManageJobs from "./pages/Employer/ManageJobs"
import ApplicationViewer from "./pages/Employer/ApplicationViewer"
import EmployerProfilePage from "./pages/Employer/EmployerProfilePage"

import ProtectedRoute from './routes/ProtectedRoute'


const App = () => {
  return (
    <div>

      <Routes>
        {/* public Routes */}
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />

        <Route path="/find-jobs" element={<JobSeekerDashboard />} />
        <Route path="/job/:jobId" element={<JobDetails />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />
        <Route path="/profile" element={<UserProfile />} />

        {/* protected Routes */}
        <Route element={<ProtectedRoute requiredRole="employer" />}>
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/post-job" element={<JobPostingForm />} />
          <Route path="/manage-jobs" element={<ManageJobs />} />
          <Route path="/applicants" element={<ApplicationViewer />} />
          <Route path="/company-profile" element={<EmployerProfilePage />} />
        </Route>

        {/* Catch all routes */}
        <Route path="*" element={<Navigate to="/" replace/>} />
      </Routes>
      
      <Toaster
      toastOptions={{
        className: '',
        style: {
          fontSize: "13px",
        },
      }}
      />
    </div>
  )
}

export default App