import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Requests() {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const API_URL = 'http://localhost:5000/api'

  useEffect(() => {
    fetchRequests()
  }, [])

  const fetchRequests = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('token')
      const response = await axios.get(`${API_URL}/schools/requests/all`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setRequests(response.data)
    } catch (err) {
      setError('Failed to load requests')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem('token')
      await axios.post(`${API_URL}/schools/requests/${id}/approve`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setRequests(requests.map(r => r._id === id ? { ...r, status: 'approved' } : r))
    } catch (err) {
      setError('Failed to approve request')
      console.error(err)
    }
  }

  const handleReject = async (id) => {
    try {
      const token = localStorage.getItem('token')
      await axios.post(`${API_URL}/schools/requests/${id}/reject`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setRequests(requests.map(r => r._id === id ? { ...r, status: 'rejected' } : r))
    } catch (err) {
      setError('Failed to reject request')
      console.error(err)
    }
  }

  if (loading) return <div className="p-8">Loading...</div>

  return (
    <div className="p-8 max-w-6xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">School Requests</h1>
      {error && <div className="bg-red-100 text-red-800 p-3 rounded mb-4">{error}</div>}

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">School Name</th>
              <th className="px-6 py-3 text-left">City</th>
              <th className="px-6 py-3 text-left">Contact</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(r => (
              <tr key={r._id} className="border-t">
                <td className="px-6 py-3">{r.school_name}</td>
                <td className="px-6 py-3">{r.city}</td>
                <td className="px-6 py-3">{r.contact_name}</td>
                <td className="px-6 py-3">{r.contact_email}</td>
                <td className="px-6 py-3">
                  <span className={`px-3 py-1 rounded text-sm ${
                    r.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    r.status === 'approved' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {r.status}
                  </span>
                </td>
                <td className="px-6 py-3 flex gap-2">
                  {r.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleApprove(r._id)}
                        className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(r._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {r.status !== 'pending' && (
                    <span className="text-gray-500 text-sm">{r.status}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {requests.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No school requests found
        </div>
      )}
    </div>
  )
}
