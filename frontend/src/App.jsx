import React from 'react'
import { Toaster } from 'react-hot-toast'
import LoginLanding from './pages/LoginLanding'
import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Settings from './pages/Setting'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Layout from './pages/Layout'
import Attendance from './pages/Attendance'
import Leave from './pages/Leave'
import Payslip from './pages/Payslip'
import PrintPayslip from './pages/PrintPayslip'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
    <>
    <Toaster/>
    <Routes>
      <Route path="/login" element={<LoginLanding/>}/>
      
      <Route path='/login/admin' element={<LoginForm role="admin" title="Admin Portal"
      subtitle="Sign in to manage the organization"/>}/>
      <Route path='/login/employee' element={<LoginForm role="employee" title="Employee Portal" subtitle="Sign into Access your account"/>}/>

      <Route element={<Layout/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="employees" element={<Employees/>}/>
        <Route path="attendance" element={<Attendance/>}/>
        <Route path="leave" element={<Leave/>}/>
        <Route path="payslips" element={<Payslip/>}/>
        <Route path="setting" element={<Settings/>}/>
      </Route>
      <Route path="print/payslips/:id" element={<PrintPayslip/>}/>

      <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
    </Routes>
    </>
  )
}

export default App
