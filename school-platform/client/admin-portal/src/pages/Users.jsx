import { useState } from 'react'

export default function Users() {
  const [tab, setTab] = useState('teachers')
  const teachers = [
    { id: 1, name: 'John Doe', email: 'john@test.com', school: 'DPS', joined: '2025-01-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@test.com', school: 'Cambridge', joined: '2025-01-05' },
  ]
  const students = [
    { id: 1, name: 'Alice', email: 'alice@test.com', class: '10-A', school: 'DPS', joined: '2025-01-01' },
  ]

  return (
    <div className="p-8 max-w-6xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">User Management</h1>
      <div className="flex gap-4 mb-6">
        <button onClick={() => setTab('teachers')} className={`px-4 py-2 ${tab === 'teachers' ? 'bg-gray-900 text-white' : 'bg-gray-200'} rounded`}>Teachers</button>
        <button onClick={() => setTab('students')} className={`px-4 py-2 ${tab === 'students' ? 'bg-gray-900 text-white' : 'bg-gray-200'} rounded`}>Students</button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100"><tr><th className="px-6 py-3 text-left">Name</th><th className="px-6 py-3 text-left">Email</th><th className="px-6 py-3 text-left">{tab === 'teachers' ? 'School' : 'Class'}</th><th className="px-6 py-3 text-left">Joined</th></tr></thead>
          <tbody>
            {(tab === 'teachers' ? teachers : students).map(u => (
              <tr key={u.id} className="border-t"><td className="px-6 py-3">{u.name}</td><td className="px-6 py-3">{u.email}</td><td className="px-6 py-3">{tab === 'teachers' ? u.school : u.class}</td><td className="px-6 py-3">{u.joined}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
