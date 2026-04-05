import { useState } from 'react'
import HeroSection from '../components/landing/HeroSection'
import VisionSection from '../components/landing/VisionSection'
import ViciousCircleSection from '../components/landing/ViciousCircleSection'
import PromotionalSection from '../components/landing/PromotionalSection'
import Footer from '../components/landing/Footer'
import LoginModal from '../components/LoginModal'
import '../styles/landing.css'

export default function Landing() {
  const [selectedSchool, setSelectedSchool] = useState(null)
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  const handleSchoolSelect = (school) => {
    setSelectedSchool(school)
    sessionStorage.setItem('selectedSchool', JSON.stringify(school))
    localStorage.setItem('selectedSchoolId', school._id)
    setLoginModalOpen(true)
  }

  const handleLogin = () => {
    setLoginModalOpen(true)
  }

  const userRole = localStorage.getItem('userRole') || 'admin'

  return (
    <div className="landing-page">
      <HeroSection onSchoolSelect={handleSchoolSelect} onLogin={handleLogin} />
      <VisionSection />
      <ViciousCircleSection />
      <PromotionalSection />
      <Footer userRole={userRole} />
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        role="admin"
        schoolId={selectedSchool?._id}
      />
    </div>
  )
}
