import { useState } from 'react'

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  const [formData, setFormData] = useState({ name: user.name, mobile: '', email: user.email, password: '' })

  return (
    <div className="pt-16 pb-8 px-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-dark mb-6">My Profile</h2>
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <input type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        <input type="tel" placeholder="Mobile" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
        <button className="w-full bg-primary text-white py-2 rounded-lg hover:opacity-90">Save Changes</button>
      </div>
    </div>
  )
}
