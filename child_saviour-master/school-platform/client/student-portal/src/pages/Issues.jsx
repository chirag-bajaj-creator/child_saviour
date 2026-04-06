export default function Issues() {
  const issues = [
    { id: 1, date: '01 Jan 2025', description: 'Was marked absent but was present', status: 'open' },
  ]

  return (
    <div className="pt-20 pb-8 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-dark mb-6">My Attendance Issues</h2>

      {issues.length === 0 ? (
        <div className="text-center py-12 text-muted">
          No issues raised yet.
        </div>
      ) : (
        <div className="space-y-4">
          {issues.map((issue) => (
            <div key={issue.id} className="card">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-dark">{issue.date}</div>
                  <div className="text-sm text-muted mt-1">{issue.description}</div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  issue.status === 'open' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                }`}>
                  {issue.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
