import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Requests from './pages/Requests'
import Users from './pages/Users'
import Sidebar from '../components/Sidebar'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  )
}

function ProtectedLayout() {
  const token = localStorage.getItem('token')
  return token ? (<div className="flex"><Sidebar /><div className="flex-1 pt-4"><Outlet /></div></div>) : <Navigate to="/login" />
}
