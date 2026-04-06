export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const selectedSchool = JSON.parse(sessionStorage.getItem('selectedSchool') || '{}')

  return (
    <div className="p-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-purple-900 mb-2">Welcome, Principal</h1>
      <p className="text-gray-600 mb-2">{user.name}</p>
      {selectedSchool.name && (
        <p className="text-indigo-600 font-medium mb-8">School: {selectedSchool.name}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow"><div className="text-gray-600">Total Teachers</div><div className="text-3xl font-bold">28</div></div>
        <div className="bg-white p-6 rounded-lg shadow"><div className="text-gray-600">Total Students</div><div className="text-3xl font-bold">450</div></div>
        <div className="bg-white p-6 rounded-lg shadow"><div className="text-gray-600">Active Modules</div><div className="text-3xl font-bold">5</div></div>
      </div>
    </div>
  )
}
