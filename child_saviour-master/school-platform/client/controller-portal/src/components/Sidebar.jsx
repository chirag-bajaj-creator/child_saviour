import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-64 bg-purple-900 text-white h-screen p-6 flex flex-col">
      <div className="text-2xl font-bold mb-8">SchoolOS</div>
      <nav className="flex-1 space-y-4">
        <Link to="/dashboard" className="block px-4 py-2 hover:bg-purple-800 rounded">Dashboard</Link>
        <Link to="/users" className="block px-4 py-2 hover:bg-purple-800 rounded">Users</Link>
        <Link to="/purchases" className="block px-4 py-2 hover:bg-purple-800 rounded">Purchases</Link>
      </nav>
      <button onClick={() => { localStorage.clear(); window.location.href = '/' }} className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded">Logout</button>
    </div>
  )
}
