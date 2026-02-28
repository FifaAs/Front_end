export default function Profile() {
  return (
    <div className="page">
      <div className="profile-hero">
        <div className="avatar">A</div>
        <div>
          <h1>Alex Johnson</h1>
          <p>alex.johnson@lazyapp.dev</p>
          <span className="profile-badge">● Online</span>
        </div>
      </div>

      <div className="profile-fields">
        <div className="field-row">
          <div className="field">
            <label>First Name</label>
            <input defaultValue="Alex" />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input defaultValue="Johnson" />
          </div>
        </div>
        <div className="field-row">
          <div className="field">
            <label>Email</label>
            <input defaultValue="alex.johnson@lazyapp.dev" />
          </div>
          <div className="field">
            <label>Role</label>
            <input defaultValue="Frontend Engineer" />
          </div>
        </div>
        <div className="field">
          <label>Location</label>
          <input defaultValue="San Francisco, CA" />
        </div>
        <button className="save-btn">Save Changes</button>
      </div>
    </div>
  )
}