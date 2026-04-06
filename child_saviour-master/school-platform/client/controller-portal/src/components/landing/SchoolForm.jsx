import '../../styles/school-dropdown.css'

export default function SchoolForm({
  formData,
  onFormChange,
  onFormSubmit,
  onCancel,
  loading,
  error,
  message
}) {
  return (
    <form onSubmit={onFormSubmit} className="school-form">
      <h3 className="form-title">Request Your School</h3>

      <input
        type="text"
        name="school_name"
        placeholder="School Name"
        value={formData.school_name}
        onChange={onFormChange}
        className="form-input"
      />

      <input
        type="text"
        name="city"
        placeholder="City / Area"
        value={formData.city}
        onChange={onFormChange}
        className="form-input"
      />

      <input
        type="text"
        name="contact_name"
        placeholder="Your Name"
        value={formData.contact_name}
        onChange={onFormChange}
        className="form-input"
      />

      <input
        type="email"
        name="contact_email"
        placeholder="Your Email"
        value={formData.contact_email}
        onChange={onFormChange}
        className="form-input"
      />

      <input
        type="tel"
        name="contact_phone"
        placeholder="Your Phone"
        value={formData.contact_phone}
        onChange={onFormChange}
        className="form-input"
      />

      {error && <div className="error-message">{error}</div>}
      {message && <div className="success-message">{message}</div>}

      <div className="form-buttons">
        <button
          type="submit"
          disabled={loading}
          className="submit-btn"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="cancel-btn"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}