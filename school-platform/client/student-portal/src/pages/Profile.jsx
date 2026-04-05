export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  return (
    <div className="pt-20 pb-8 px-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-dark mb-6">My Profile</h2>

      <div className="card space-y-4">
        <div>
          <label className="text-xs font-semibold text-muted">Name</label>
          <p className="text-dark font-medium">{user.name}</p>
        </div>
        <div>
          <label className="text-xs font-semibold text-muted">Email</label>
          <p className="text-dark font-medium">{user.email}</p>
        </div>
        <div>
          <label className="text-xs font-semibold text-muted">Role</label>
          <p className="text-dark font-medium capitalize">{user.role}</p>
        </div>
      </div>
    </div>
  )
}
