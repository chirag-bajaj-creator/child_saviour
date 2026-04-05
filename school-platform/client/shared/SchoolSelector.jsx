import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function SchoolSelector() {
  const [searchTerm, setSearchTerm] = useState('')
  const [schools, setSchools] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    school_name: '',
    city: '',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const API_URL = 'http://localhost:5000/api'

  // Search schools as user types
  const handleSearch = async (value) => {
    setSearchTerm(value)

    if (value.length < 2) {
      setSchools([])
      setShowDropdown(false)
      return
    }

    try {
      setLoading(true)
      const response = await axios.get(`${API_URL}/schools/search?q=${value}`)
      setSchools(response.data)
      setShowDropdown(true)
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setLoading(false)
    }
  }

  // Select a school and store in session
  const handleSchoolSelect = (school) => {
    sessionStorage.setItem('selectedSchool', JSON.stringify(school))
    localStorage.setItem('selectedSchoolId', school._id)
    setSearchTerm(school.name)
    setShowDropdown(false)
    setSchools([])
    navigate('/login')
  }

  // Handle form input
  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Submit school request
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await axios.post(`${API_URL}/schools/request`, formData)
      setMessage('✓ Submitted! We will notify you once approved.')
      setFormData({
        school_name: '',
        city: '',
        contact_name: '',
        contact_email: '',
        contact_phone: '',
      })
      setShowForm(false)

      // Clear message after 5 seconds
      setTimeout(() => setMessage(''), 5000)
    } catch (error) {
      setMessage('✗ Error submitting request. Please try again.')
      console.error('Form error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Logo and Headline */}
        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-indigo-600 mb-2">SchoolOS</div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome — find your school to get started
          </h1>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => searchTerm.length > 1 && setShowDropdown(true)}
            placeholder="Type your school name..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
          />

          {loading && (
            <div className="absolute right-3 top-3 text-indigo-600">
              <span>Loading...</span>
            </div>
          )}

          {/* Dropdown Results */}
          {showDropdown && schools.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              {schools.map((school) => (
                <div
                  key={school._id}
                  onClick={() => handleSchoolSelect(school)}
                  className="px-4 py-3 hover:bg-indigo-50 cursor-pointer border-b last:border-b-0 transition"
                >
                  <div className="font-medium text-gray-800">{school.name}</div>
                  <div className="text-sm text-gray-500">{school.city || 'No city info'}</div>
                </div>
              ))}
            </div>
          )}

          {showDropdown && searchTerm.length > 1 && schools.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-4 text-gray-600">
              No schools found
            </div>
          )}
        </div>

        {/* Don't see your school link */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="text-center w-full text-indigo-600 hover:text-indigo-800 font-medium mb-6"
          >
            Don't see your school? <span className="underline">Add your school</span>
          </button>
        )}

        {/* School Request Form */}
        {showForm && (
          <form onSubmit={handleFormSubmit} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Request Your School</h3>

            <input
              type="text"
              name="school_name"
              placeholder="School Name"
              value={formData.school_name}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />

            <input
              type="text"
              name="city"
              placeholder="City / Area"
              value={formData.city}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />

            <input
              type="text"
              name="contact_name"
              placeholder="Your Name"
              value={formData.contact_name}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />

            <input
              type="email"
              name="contact_email"
              placeholder="Your Email"
              value={formData.contact_email}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />

            <input
              type="tel"
              name="contact_phone"
              placeholder="Your Phone"
              value={formData.contact_phone}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition disabled:bg-gray-400"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Message Display */}
        {message && (
          <div className={`p-3 rounded-lg text-center font-medium ${
            message.includes('✓')
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  )
}
