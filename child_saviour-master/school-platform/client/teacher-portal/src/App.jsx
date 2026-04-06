import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MarkAttendance from './pages/MarkAttendance'
import VerifyAttendance from './pages/VerifyAttendance'
import RemarkAttendance from './pages/RemarkAttendance'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance/mark" element={<MarkAttendance />} />
          <Route path="/attendance/verify" element={<VerifyAttendance />} />
          <Route path="/attendance/remark" element={<RemarkAttendance />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

function ProtectedLayout() {
  const token = localStorage.getItem('token')
  return token ? (<><NavBar /><Outlet /></>) : <Navigate to="/" />
}
