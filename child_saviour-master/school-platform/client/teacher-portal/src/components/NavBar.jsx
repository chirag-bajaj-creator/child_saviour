import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false)
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  return (
    <nav className="fixed top-0 left-0 right-0 h-12 bg-primary text-white flex items-center justify-between px-6 z-50">
      <div className="flex items-center gap-2">
        <div className="text-xl font-bold">SchoolOS</div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-0 right-0 w-2 h-2 bg-warm rounded-full"></span>
        </button>

        <div className="relative">
          <button onClick={() => setShowMenu(!showMenu)} className="w-8 h-8 bg-warm rounded-full flex items-center justify-center font-bold text-xs">
            {user.name?.charAt(0) || 'T'}
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-dark rounded-lg shadow-lg">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
              <button onClick={() => { localStorage.clear(); window.location.href = '/' }} className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
