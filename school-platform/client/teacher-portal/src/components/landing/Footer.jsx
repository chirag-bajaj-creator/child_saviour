import '../../styles/footer.css'

export default function Footer({ userRole = 'teacher' }) {
  const getMyPages = () => {
    const pages = {
      admin: [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Manage Users', href: '/users' },
        { label: 'Requests', href: '/requests' },
        { label: 'Settings', href: '#' },
      ],
      controller: [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Manage Attendance', href: '#' },
        { label: 'Reports', href: '#' },
        { label: 'Profile', href: '#' },
      ],
      teacher: [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Mark Attendance', href: '/attendance/mark' },
        { label: 'Verify Attendance', href: '/attendance/verify' },
        { label: 'Remark Attendance', href: '/attendance/remark' },
      ],
      student: [
        { label: 'Home', href: '/home' },
        { label: 'Attendance', href: '/attendance/detail' },
        { label: 'Issues', href: '/issues' },
        { label: 'Profile', href: '/profile' },
      ],
    }
    return pages[userRole] || pages.admin
  }

  const myPages = getMyPages()

  return (
    <footer className="landing-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">My Pages</h3>
          <ul className="footer-links">
            {myPages.map((page, index) => (
              <li key={index}>
                <a href={page.href} className="footer-link">
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Company</h3>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Contact</a></li>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Support</h3>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Help Center</a></li>
            <li><a href="#" className="footer-link">Documentation</a></li>
            <li><a href="#" className="footer-link">FAQ</a></li>
            <li><a href="#" className="footer-link">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 SchoolOS. All rights reserved.</p>
      </div>
    </footer>
  )
}