export default function AttendanceDetail() {
  const attendanceData = [
    { date: '01 Jan 2025', present: 1, absent: 0 },
    { date: '02 Jan 2025', present: 0, absent: 1 },
    { date: '03 Jan 2025', present: 1, absent: 0 },
  ]

  return (
    <div className="pt-20 pb-8 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-dark mb-6">Attendance Detail</h2>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-center py-3 px-4">Present</th>
                <th className="text-center py-3 px-4">Absent</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{row.date}</td>
                  <td className="py-3 px-4 text-center">{row.present}</td>
                  <td className="py-3 px-4 text-center">{row.absent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
