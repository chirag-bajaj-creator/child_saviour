import { useState } from 'react'

export default function Users() {
  const [tab, setTab] = useState('teachers')
  const teachers = [
    { id: 1, name: 'John Doe', subject: 'Math', employeeId: 'T001', email: 'john@school.com', joined: '2024-06-01' },
    { id: 2, name: 'Jane Smith', subject: 'English', employeeId: 'T002', email: 'jane@school.com', joined: '2024-06-15' },
  ]
  const students = [
    { id: 1, name: 'Alice', class: '10-A', section: 'A', rollNumber: '001', parentName: 'Mr. A' },
    { id: 2, name: 'Bob', class: '10-A', section: 'A', rollNumber: '002', parentName: 'Mr. B' },
  ]

  return (
    <div className="p-8 max-w-6xl">
      <h1 className="text-2xl font-bold text-purple-900 mb-6">School Users</h1>
      <div className="flex gap-4 mb-6">
        <button onClick={() => setTab('teachers')} className={`px-4 py-2 ${tab === 'teachers' ? 'bg-purple-900 text-white' : 'bg-gray-200'} rounded`}>Teachers</button>
        <button onClick={() => setTab('students')} className={`px-4 py-2 ${tab === 'students' ? 'bg-purple-900 text-white' : 'bg-gray-200'} rounded`}>Students</button>
      </div>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100"><tr>{tab === 'teachers' ? (
            <><th className="px-6 py-3 text-left">Name</th><th className="px-6 py-3 text-left">Subject</th><th className="px-6 py-3 text-left">ID</th><th className="px-6 py-3 text-left">Email</th><th className="px-6 py-3 text-left">Joined</th></>
          ) : (
            <><th className="px-6 py-3 text-left">Name</th><th className="px-6 py-3 text-left">Class</th><th className="px-6 py-3 text-left">Roll</th><th className="px-6 py-3 text-left">Parent</th></>
          )}</tr></thead>
          <tbody>
            {(tab === 'teachers' ? teachers : students).map(u => (
              <tr key={u.id} className="border-t">
                <td className="px-6 py-3">{u.name}</td>
                {tab === 'teachers' ? (
                  <><td className="px-6 py-3">{u.subject}</td><td className="px-6 py-3">{u.employeeId}</td><td className="px-6 py-3">{u.email}</td><td className="px-6 py-3">{u.joined}</td></>
                ) : (
                  <><td className="px-6 py-3">{u.class}</td><td className="px-6 py-3">{u.rollNumber}</td><td className="px-6 py-3">{u.parentName}</td></>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
