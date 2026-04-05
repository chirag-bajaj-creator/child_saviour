import SchoolDropdown from './SchoolDropdown'
import '../../styles/hero.css'
import heroImage from '../../../../../../image.png'

export default function HeroSection({ onSchoolSelect, onLogin }) {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay">
        <nav className="hero-nav">
          <div className="nav-logo">SchoolOS</div>
          <button className="nav-login-btn" onClick={onLogin}>Login</button>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">One Stop Solution</h1>
          <p className="hero-subtitle">What school problems?</p>
          <div className="hero-dropdown-wrapper">
            <SchoolDropdown onSchoolSelect={onSchoolSelect} />
          </div>
        </div>
      </div>
    </section>
  )
}
