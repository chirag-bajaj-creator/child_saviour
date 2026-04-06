import { Link } from 'react-router-dom'

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const selectedSchool = JSON.parse(sessionStorage.getItem('selectedSchool') || '{}')

  return (
    <div className="pt-16 pb-8 px-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-primary to-accent rounded-xl text-white p-8 mb-8">
        <h1 className="text-3xl font-bold">You are the knowledge base for every child. Without you, nothing is possible.</h1>
        <p className="mt-2">{user.name} • {user.role}</p>
        {selectedSchool.name && <p className="mt-1 text-blue-100">School: {selectedSchool.name}</p>}
      </div>

      <h2 className="text-2xl font-bold text-dark mb-6">Attendance Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <AttendanceCard title="Mark Attendance" path="/attendance/mark" color="bg-blue-100" />
        <AttendanceCard title="Verify Attendance" path="/attendance/verify" color="bg-green-100" />
        <AttendanceCard title="Remark Attendance" path="/attendance/remark" color="bg-orange-100" />
      </div>

      <h2 className="text-2xl font-bold text-dark mb-6">Must-Have Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {['Fees Collection', 'Parent Messaging', 'Timetable & Classes', 'Library Management'].map((feature) => (
          <div key={feature} className="bg-white border border-blue-200 rounded-lg p-4 hover:shadow-lg transition">
            <div className="font-semibold text-dark">{feature}</div>
            <div className="text-sm text-muted">$99/month</div>
            <button className="mt-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-700">+</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function AttendanceCard({ title, path, color }) {
  return (
    <Link to={path} className={`${color} rounded-lg p-6 hover:shadow-lg transition cursor-pointer`}>
      <div className="text-lg font-semibold text-dark">{title}</div>
      <div className="text-sm text-muted mt-1">Click to manage</div>
    </Link>
  )
}
