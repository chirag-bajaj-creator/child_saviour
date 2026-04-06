export default function VerifyAttendance() {
  return (
    <div className="pt-16 pb-8 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-dark mb-6">Verify Attendance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-bold text-dark mb-4">Present Students</h3>
          <table className="w-full text-sm"><tbody>
            {['Student 1', 'Student 2'].map(s => <tr key={s} className="border-b"><td className="py-2">{s}</td><td className="text-green-600">Present</td></tr>)}
          </tbody></table>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-bold text-dark mb-4">Absent Students</h3>
          <table className="w-full text-sm"><tbody>
            {['Student 3'].map(s => <tr key={s} className="border-b"><td className="py-2">{s}</td><td className="text-red-600">Absent</td></tr>)}
          </tbody></table>
        </div>
      </div>
    </div>
  )
}
