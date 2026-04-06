import '../../styles/vicious-circle.css'

export default function ViciousCircleSection() {
  const cycles = [
    'Attendance\nManual',
    'Teacher\nFrustrated',
    'Student\nIrritated',
    'Attendance\nCannot Change',
    'Loss of\nAttendance',
  ]

  return (
    <section className="vicious-circle-section">
      <div className="circle-container">
        <h2 className="circle-title">The Vicious Cycle</h2>
        <p className="circle-subtitle">See the frustration loop that our platform solves</p>

        <div className="circle-wrapper">
          {cycles.map((cycle, index) => (
            <div key={index} className="cycle-item">
              <div className="cycle-circle">
                <span className="cycle-text">{cycle}</span>
              </div>
              {index < cycles.length - 1 && <div className="cycle-arrow">→</div>}
            </div>
          ))}
          <div className="cycle-connector" />
        </div>
      </div>
    </section>
  )
}