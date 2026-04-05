import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="nav-fixed h-12 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold text-primary">SchoolOS</div>
        <span className="text-sm text-muted">Student Portal</span>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/home" className="text-gray-700 hover:text-primary transition">
          Grades
        </Link>
        <Link to="/home" className="text-gray-700 hover:text-primary transition">
          Timetable
        </Link>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/profile" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
          S
        </Link>
      </div>
    </nav>
  )
}
