export default function RemarkAttendance() {
  return (
    <div className="pt-16 pb-8 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-dark mb-6">Remark Attendance</h2>
      <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg mb-6" />
      <button className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90">Save Changes</button>
    </div>
  )
}
