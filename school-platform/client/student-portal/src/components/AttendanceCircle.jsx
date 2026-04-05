export default function AttendanceCircle({ percentage = 85 }) {
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-6 mt-16">
      <svg width="120" height="120" className="transform -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#E0DEFC"
          strokeWidth="6"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#6C63FF"
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.8s ease',
          }}
        />
      </svg>
      <div className="text-center">
        <div className="text-4xl font-bold text-dark">{percentage}%</div>
        <div className="text-sm text-muted">attendance</div>
      </div>
      <button className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
        View Detailed Attendance
      </button>
    </div>
  )
}
