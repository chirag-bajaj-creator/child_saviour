import { useState } from 'react'
import { searchSchools, addSchoolRequest } from '../../services/schoolService'
import { validateSchoolForm, initialFormState } from '../../services/formValidation'
import SchoolSearchInput from './SchoolSearchInput'
import SchoolForm from './SchoolForm'
import '../../styles/school-dropdown.css'

export default function SchoolDropdown({ onSchoolSelect }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [schools, setSchools] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState(initialFormState)

  const handleSearch = async (value) => {
    setSearchTerm(value)
    setError('')

    if (value.length < 2) {
      setSchools([])
      setShowDropdown(false)
      return
    }

    try {
      setLoading(true)
      const results = await searchSchools(value)
      setSchools(results || [])
      setShowDropdown(true)
    } catch (err) {
      setError('Error searching schools')
      setSchools([])
    } finally {
      setLoading(false)
    }
  }

  const handleSchoolSelect = (school) => {
    setSearchTerm(school.name)
    setShowDropdown(false)
    setSchools([])
    onSchoolSelect(school)
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')

    const validation = validateSchoolForm(formData)
    if (!validation.isValid) {
      setError(validation.error)
      return
    }

    try {
      setLoading(true)
      await addSchoolRequest(formData)
      setMessage('✓ Submitted! We will notify you once approved.')
      setFormData(initialFormState)
      setShowForm(false)
      setTimeout(() => setMessage(''), 5000)
    } catch (err) {
      setError('Error submitting request. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setShowForm(false)
    setError('')
    setMessage('')
  }

  return (
    <div className="school-dropdown-container">
      <SchoolSearchInput
        searchTerm={searchTerm}
        onSearch={handleSearch}
        loading={loading}
      />

      {showDropdown && schools.length > 0 && (
        <div className="dropdown-menu">
          {schools.map((school) => (
            <div
              key={school._id}
              onClick={() => handleSchoolSelect(school)}
              className="dropdown-item"
            >
              <div className="school-name">{school.name}</div>
              <div className="school-city">{school.city || 'No city info'}</div>
            </div>
          ))}
        </div>
      )}

      {showDropdown && searchTerm.length > 1 && schools.length === 0 && !loading && (
        <div className="dropdown-no-results">
          No schools found
        </div>
      )}

      {!showForm && schools.length === 0 && searchTerm.length > 1 && (
        <button
          onClick={() => setShowForm(true)}
          className="add-school-btn"
        >
          Don't see your school? Add it here
        </button>
      )}

      {showForm && (
        <SchoolForm
          formData={formData}
          onFormChange={handleFormChange}
          onFormSubmit={handleFormSubmit}
          onCancel={handleCancel}
          loading={loading}
          error={error}
          message={message}
        />
      )}
    </div>
  )
}
