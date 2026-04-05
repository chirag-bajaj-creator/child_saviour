export default function Dashboard() {
  return (
    <div className="p-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow"><div className="text-gray-600">Total Schools</div><div className="text-3xl font-bold">12</div></div>
        <div className="bg-white p-6 rounded-lg shadow"><div className="text-gray-600">Total Users</div><div className="text-3xl font-bold">450</div></div>
        <div className="bg-white p-6 rounded-lg shadow"><div className="text-gray-600">Pending Requests</div><div className="text-3xl font-bold">5</div></div>
      </div>
    </div>
  )
}
