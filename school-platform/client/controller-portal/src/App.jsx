import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Purchases from './pages/Purchases'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/purchases" element={<Purchases />} />
        </Route>
      </Routes>
    </Router>
  )
}

function ProtectedLayout() {
  const token = localStorage.getItem('token')
  return token ? (<div className="flex"><Sidebar /><div className="flex-1 pt-4"><Outlet /></div></div>) : <Navigate to="/login" />
}
