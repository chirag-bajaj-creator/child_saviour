import { useState } from 'react'

export default function MarkAttendance() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', present: true },
    { id: 2, name: 'Student 2', present: true },
    { id: 3, name: 'Student 3', present: true },
  ])

  const toggleAttendance = (id) => {
    setStudents(students.map(s => s.id === id ? { ...s, present: !s.present } : s))
  }

  return (
    <div className="pt-16 pb-8 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-dark mb-6">Mark Attendance</h2>

      <div className="flex justify-between items-center mb-6">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg" />
        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90">Save</button>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Student Name</th>
              <th className="text-center py-3 px-4">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{student.name}</td>
                <td className="py-3 px-4 text-center">
                  <button onClick={() => toggleAttendance(student.id)} className={`px-3 py-1 rounded-full text-sm font-semibold ${student.present ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {student.present ? 'Present' : 'Absent'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
