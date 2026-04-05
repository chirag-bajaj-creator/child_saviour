import '../../styles/school-dropdown.css'

export default function SchoolSearchInput({ searchTerm, onSearch, loading }) {
  return (
    <div className="search-input-wrapper">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        onFocus={() => searchTerm.length > 1}
        placeholder="Search your school..."
        className="school-search-input"
      />
      {loading && <span className="loading-spinner">Loading...</span>}
    </div>
  )
}