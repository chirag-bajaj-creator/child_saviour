export default function Purchases() {
  const purchases = [
    { id: 1, module: 'Grades & Results', teacher: 'John Doe', date: '2025-01-15', status: 'Active' },
    { id: 2, module: 'Parent Messaging', teacher: 'Jane Smith', date: '2025-01-20', status: 'Pending' },
    { id: 3, module: 'Timetable', teacher: 'John Doe', date: '2025-01-25', status: 'Active' },
  ]

  return (
    <div className="p-8 max-w-6xl">
      <h1 className="text-2xl font-bold text-purple-900 mb-6">Module Purchases</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {purchases.map(p => (
          <div key={p.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
            <div className="text-lg font-semibold text-purple-900">{p.module}</div>
            <div className="text-sm text-gray-600 mt-2">By: {p.teacher}</div>
            <div className="text-sm text-gray-600">Date: {p.date}</div>
            <div className="mt-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${p.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {p.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
