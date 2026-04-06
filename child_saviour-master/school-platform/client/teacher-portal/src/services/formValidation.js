export const validateSchoolForm = (formData) => {
  if (!formData.school_name.trim()) {
    return { isValid: false, error: 'School name is required' }
  }
  if (!formData.city.trim()) {
    return { isValid: false, error: 'City is required' }
  }
  if (!formData.contact_name.trim()) {
    return { isValid: false, error: 'Contact name is required' }
  }
  if (!formData.contact_email.includes('@')) {
    return { isValid: false, error: 'Valid email is required' }
  }
  if (!formData.contact_phone.trim()) {
    return { isValid: false, error: 'Phone number is required' }
  }
  return { isValid: true, error: '' }
}

export const initialFormState = {
  school_name: '',
  city: '',
  contact_name: '',
  contact_email: '',
  contact_phone: '',
}
