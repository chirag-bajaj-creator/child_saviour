import { useState } from 'react'
import AttendanceCircle from '../components/AttendanceCircle'

export default function Home() {
  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false)
  const selectedSchool = JSON.parse(sessionStorage.getItem('selectedSchool') || '{}')

  return (
    <div className="pt-16 pb-8 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-dark mb-2">Welcome back!</h2>
      {selectedSchool.name && <p className="text-blue-600 font-medium mb-2">School: {selectedSchool.name}</p>}
      <p className="text-muted mb-8">Here's your attendance overview</p>

      <div className="flex flex-col items-center">
        <AttendanceCircle percentage={85} />

        <button
          onClick={() => setIsIssueModalOpen(true)}
          className="mt-8 bg-accent text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          Raise Attendance Issue
        </button>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold text-dark mb-6">Subjects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Mathematics', 'English', 'Science', 'History', 'Geography', 'PE'].map((subject) => (
            <div key={subject} className="card">
              <div className="font-semibold text-dark">{subject}</div>
              <div className="text-sm text-muted">Last Score: —</div>
            </div>
          ))}
        </div>
      </div>

      {isIssueModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Report Incorrect Attendance</h3>
            <form>
              <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3" />
              <textarea placeholder="Describe what happened..." rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3" />
              <div className="flex gap-2">
                <button type="submit" className="flex-1 btn-primary">
                  Submit
                </button>
                <button type="button" onClick={() => setIsIssueModalOpen(false)} className="flex-1 btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
