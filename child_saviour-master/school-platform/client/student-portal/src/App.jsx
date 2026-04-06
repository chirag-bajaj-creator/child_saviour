import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Home from './pages/Home'
import AttendanceDetail from './pages/AttendanceDetail'
import Issues from './pages/Issues'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/attendance/detail" element={<AttendanceDetail />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

function ProtectedRoute() {
  const token = localStorage.getItem('token')
  return token ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  )
}

export default App
