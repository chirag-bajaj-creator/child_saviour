import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

export const searchSchools = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/schools/search?q=${query}`)
    return response.data
  } catch (error) {
    console.error('Error searching schools:', error)
    throw error
  }
}

export const addSchoolRequest = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/schools/request`, formData)
    return response.data
  } catch (error) {
    console.error('Error adding school request:', error)
    throw error
  }
}