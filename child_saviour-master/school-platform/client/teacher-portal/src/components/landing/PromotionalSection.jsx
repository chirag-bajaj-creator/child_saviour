import { useNavigate } from 'react-router-dom'
import '../../styles/promotional.css'

export default function PromotionalSection() {
  const navigate = useNavigate()

  const handleAvail = () => {
    navigate('/login')
  }

  return (
    <section className="promotional-section">
      <div className="promotional-content">
        <h2 className="promotional-text">first 100 schools free subscriptions</h2>
        <button className="avail-button" onClick={handleAvail}>
          Avail
        </button>
      </div>
    </section>
  )
}