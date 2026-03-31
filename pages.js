/* ============================================================
   DYNAMICALLY INJECTED PAGES — Citizen + Admin
   ============================================================ */

const sidebarCitizen = `
<div class="sidebar-overlay"></div>
<aside class="sidebar">
  <div class="sidebar-header"><div class="sidebar-logo" style="background:transparent;"><img src="logo.png" style="width:100%;height:100%;object-fit:contain;" alt="Logo"></div><div class="sidebar-brand">Citizen Portal<small>Government of Pakistan</small></div></div>
  <nav class="sidebar-nav">
    <div class="nav-section-title">Main</div>
    <a href="#dashboard" class="nav-item" data-route="dashboard"><span class="icon"><i class="fas fa-house"></i></span> Dashboard</a>
    <a href="#complaint-create" class="nav-item" data-route="complaint-create"><span class="icon"><i class="fas fa-plus-circle"></i></span> Lodge Complaint</a>
    <a href="#complaints" class="nav-item" data-route="complaints"><span class="icon"><i class="fas fa-list"></i></span> My Complaints <span class="nav-badge">3</span></a>
    <div class="nav-section-title">Account</div>
    <a href="#profile" class="nav-item" data-route="profile"><span class="icon"><i class="fas fa-user"></i></span> Profile</a>
    <a href="#contact" class="nav-item"><span class="icon"><i class="fas fa-circle-question"></i></span> Help</a>
    <a href="#login" class="nav-item"><span class="icon"><i class="fas fa-right-from-bracket"></i></span> Logout</a>
  </nav>
  <div class="sidebar-footer"><div class="sidebar-user"><div class="sidebar-avatar">AK</div><div><div class="sidebar-user-name">Ahmad Khan</div><div class="sidebar-user-role">Citizen</div></div></div></div>
</aside>`;

const headerHTML = (crumb, title) => `
<header class="top-header">
  <div class="header-left"><button class="menu-toggle" onclick="document.querySelector('.sidebar').classList.toggle('open');document.querySelector('.sidebar-overlay').classList.toggle('active')"><i class="fas fa-bars"></i></button>
  <div class="breadcrumb"><span>${crumb}</span> <i class="fas fa-chevron-right" style="font-size:0.6rem"></i> <span class="current">${title}</span></div></div>
  <div class="header-right"><button class="header-icon-btn"><i class="fas fa-bell"></i><span class="notif-badge">5</span></button><button class="header-icon-btn"><i class="fas fa-user-circle"></i></button></div>
</header>`;

const sidebarAdmin = `
<div class="sidebar-overlay"></div>
<aside class="sidebar" style="background:var(--gray-900)">
  <div class="sidebar-header"><div class="sidebar-logo" style="background:transparent;"><img src="logo.png" style="width:100%;height:100%;object-fit:contain;" alt="Logo"></div><div class="sidebar-brand">Admin Panel<small>Citizen Portal — Officer</small></div></div>
  <nav class="sidebar-nav">
    <div class="nav-section-title">Overview</div>
    <a href="#admin-dashboard" class="nav-item" data-route="admin-dashboard"><span class="icon"><i class="fas fa-gauge-high"></i></span> Dashboard</a>
    <div class="nav-section-title">Complaints</div>
    <a href="#admin-complaints" class="nav-item" data-route="admin-complaints"><span class="icon"><i class="fas fa-inbox"></i></span> Complaint Queue <span class="nav-badge">24</span></a>
    <div class="nav-section-title">Management</div>
    <a href="#admin-departments" class="nav-item" data-route="admin-departments"><span class="icon"><i class="fas fa-building"></i></span> Departments</a>
    <a href="#admin-reports" class="nav-item" data-route="admin-reports"><span class="icon"><i class="fas fa-chart-bar"></i></span> Reports</a>
    <div class="nav-section-title">System</div>
    <a href="#login" class="nav-item"><span class="icon"><i class="fas fa-right-from-bracket"></i></span> Logout</a>
  </nav>
  <div class="sidebar-footer"><div class="sidebar-user"><div class="sidebar-avatar" style="background:var(--status-progress)">FS</div><div><div class="sidebar-user-name">Farhan Shah</div><div class="sidebar-user-role">Focal Person</div></div></div></div>
</aside>`;

// Helper
function injectPage(id, content) {
    const div = document.createElement('div');
    div.id = id;
    div.className = 'page';
    div.innerHTML = content;
    document.body.appendChild(div);
}

/* ==================== COMPLAINTS LIST ==================== */
injectPage('page-complaints', `<div class="dashboard-layout">${sidebarCitizen}<div class="main-content">
${headerHTML('Home', 'My Complaints')}
<div class="page-content">
  <div class="flex justify-between items-center mb-lg" style="flex-wrap:wrap;gap:12px">
    <div class="page-header" style="margin-bottom:0"><h1>My Complaints</h1><p>Track and manage all your submitted complaints</p></div>
    <a href="#complaint-create" class="btn btn-primary"><i class="fas fa-plus"></i> New Complaint</a>
  </div>
  <div class="filters-bar">
    <div class="search-input"><span class="icon"><i class="fas fa-search"></i></span><input placeholder="Search by ID or subject..."></div>
    <button class="filter-chip active">All</button><button class="filter-chip">Filed</button><button class="filter-chip">In Progress</button><button class="filter-chip">Resolved</button><button class="filter-chip">Rejected</button>
  </div>
  <div class="card">
    <div class="table-container"><table class="data-table"><thead><tr><th>Tracking ID</th><th>Subject</th><th>Category</th><th>Department</th><th>Status</th><th>Filed</th><th>Updated</th></tr></thead>
    <tbody>
      <tr onclick="navigateTo('complaint-detail')"><td><strong>CP-2026-00847</strong></td><td>Road damage on GT Road, Rawalpindi</td><td>Infrastructure</td><td>Highway Authority</td><td><span class="badge badge-progress">In Progress</span></td><td>28 Mar</td><td>30 Mar</td></tr>
      <tr onclick="navigateTo('complaint-detail')"><td><strong>CP-2026-00812</strong></td><td>Water supply issue in Sector G-11</td><td>Utility</td><td>CDA — Water</td><td><span class="badge badge-filed">Filed</span></td><td>25 Mar</td><td>25 Mar</td></tr>
      <tr onclick="navigateTo('complaint-detail')"><td><strong>CP-2026-00798</strong></td><td>Electricity load shedding schedule</td><td>Utility</td><td>IESCO</td><td><span class="badge badge-resolved">Resolved</span></td><td>22 Mar</td><td>28 Mar</td></tr>
      <tr onclick="navigateTo('complaint-detail')"><td><strong>CP-2026-00756</strong></td><td>Passport renewal delay — Islamabad</td><td>Federal</td><td>DGIP</td><td><span class="badge badge-resolved">Resolved</span></td><td>18 Mar</td><td>24 Mar</td></tr>
      <tr onclick="navigateTo('complaint-detail')"><td><strong>CP-2026-00701</strong></td><td>Blocked drain in Sector I-8</td><td>Municipal</td><td>CDA — Sanitation</td><td><span class="badge badge-rejected">Rejected</span></td><td>12 Mar</td><td>15 Mar</td></tr>
      <tr onclick="navigateTo('complaint-detail')"><td><strong>CP-2026-00688</strong></td><td>Gas meter reading discrepancy</td><td>Utility</td><td>SNGPL</td><td><span class="badge badge-resolved">Resolved</span></td><td>10 Mar</td><td>20 Mar</td></tr>
    </tbody></table></div>
    <div class="card-footer"><div class="pagination"><span class="pagination-info">Showing 1–6 of 12 complaints</span><div class="pagination-pages"><button class="page-btn">‹</button><button class="page-btn active">1</button><button class="page-btn">2</button><button class="page-btn">›</button></div></div></div>
  </div>
</div></div></div>`);

/* ==================== COMPLAINT DETAIL ==================== */
injectPage('page-complaint-detail', `<div class="dashboard-layout">${sidebarCitizen}<div class="main-content">
${headerHTML('Complaints', 'CP-2026-00847')}
<div class="page-content">
  <a href="#complaints" class="btn btn-sm btn-secondary mb-lg"><i class="fas fa-arrow-left"></i> Back to Complaints</a>
  <div class="detail-header">
    <div class="flex justify-between items-center" style="flex-wrap:wrap;gap:12px">
      <div><div class="detail-id">Tracking ID: CP-2026-00847</div><h2 class="detail-title">Road damage on GT Road, Rawalpindi</h2>
        <div class="detail-meta">
          <div class="detail-meta-item"><span class="label">Category:</span> Infrastructure</div>
          <div class="detail-meta-item"><span class="label">Department:</span> Highway Authority</div>
          <div class="detail-meta-item"><span class="label">Type:</span> Complaint</div>
          <div class="detail-meta-item"><span class="label">Filed:</span> 28 Mar 2026</div>
        </div>
      </div>
      <span class="badge badge-progress" style="font-size:0.9rem;padding:8px 20px">In Progress</span>
    </div>
  </div>
  <div class="detail-grid">
    <div>
      <div class="card mb-lg"><div class="card-header"><h3>Description</h3></div><div class="card-body"><p style="color:var(--gray-700);line-height:1.8">There is significant road damage on GT Road near Rawalpindi Cantt area. Multiple potholes have developed causing risk to vehicles and commuters. The damage spans approximately 500 meters of road. Several accidents have been reported in the past week due to this issue. Urgent repair is needed before the rainy season worsens the condition.</p></div></div>
      <div class="card mb-lg"><div class="card-header"><h3>Attachments</h3></div><div class="card-body"><div class="flex gap-md" style="flex-wrap:wrap">
        <div style="width:120px;height:90px;background:var(--gray-200);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--gray-500)"><i class="fas fa-image" style="font-size:1.5rem"></i></div>
        <div style="width:120px;height:90px;background:var(--gray-200);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--gray-500)"><i class="fas fa-image" style="font-size:1.5rem"></i></div>
        <div style="width:120px;height:90px;background:var(--gray-200);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--gray-500)"><i class="fas fa-file-pdf" style="font-size:1.5rem"></i></div>
      </div></div></div>
      <div class="card"><div class="card-header"><h3>Officer Remarks</h3></div><div class="card-body"><p class="text-muted text-sm">Survey team dispatched on 30 Mar 2026. Damage assessment report pending. Repair work expected to commence within 7 working days.</p><p class="text-xs text-muted mt-sm">— Engr. Bilal Ahmed, Highway Authority</p></div></div>
    </div>
    <div>
      <div class="card mb-lg"><div class="card-header"><h3>Status Timeline</h3></div><div class="card-body">
        <div class="timeline">
          <div class="timeline-item completed"><div class="timeline-dot"></div><div class="timeline-content"><h4>Complaint Filed</h4><p>Submitted by Ahmad Khan</p><div class="date">28 Mar 2026, 10:30 AM</div></div></div>
          <div class="timeline-item completed"><div class="timeline-dot"></div><div class="timeline-content"><h4>Received by Department</h4><p>Highway Authority acknowledged</p><div class="date">28 Mar 2026, 02:15 PM</div></div></div>
          <div class="timeline-item current"><div class="timeline-dot"></div><div class="timeline-content"><h4>Under Examination</h4><p>Survey team dispatched</p><div class="date">30 Mar 2026, 09:00 AM</div></div></div>
          <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-content"><h4>Resolution</h4><p>Pending...</p></div></div>
        </div>
      </div></div>
      <div class="card"><div class="card-header"><h3>Details</h3></div><div class="card-body">
        <div class="info-row"><span class="info-label">SLA Status</span><span class="info-value" style="color:var(--green-600)">Within SLA (Day 3 of 30)</span></div>
        <div class="info-row"><span class="info-label">Level</span><span class="info-value">Provincial — Punjab</span></div>
        <div class="info-row"><span class="info-label">District</span><span class="info-value">Rawalpindi</span></div>
        <div class="info-row"><span class="info-label">Assigned To</span><span class="info-value">Engr. Bilal Ahmed</span></div>
      </div></div>
    </div>
  </div>
</div></div></div>`);

/* ==================== CREATE COMPLAINT ==================== */
injectPage('page-complaint-create', `<div class="dashboard-layout">${sidebarCitizen}<div class="main-content">
${headerHTML('Complaints', 'Lodge Complaint')}
<div class="page-content">
  <div class="page-header"><h1>Lodge New Complaint</h1><p>Submit your complaint, suggestion, or guidance request</p></div>
  <div class="wizard-steps">
    <div class="wizard-step active"><span class="step-num">1</span><span>Type</span></div><div class="wizard-connector"></div>
    <div class="wizard-step"><span class="step-num">2</span><span>Category</span></div><div class="wizard-connector"></div>
    <div class="wizard-step"><span class="step-num">3</span><span>Details</span></div><div class="wizard-connector"></div>
    <div class="wizard-step"><span class="step-num">4</span><span>Review</span></div>
  </div>
  <div class="wizard-content">
    <div class="wizard-panel active card">
      <div class="card-body p-xl">
        <h3 class="mb-lg">Select Submission Type</h3>
        <div class="reg-type-cards">
          <label class="reg-type-card" style="cursor:pointer"><input type="radio" name="type" checked style="margin-right:8px"><div class="reg-type-icon" style="background:#FFEBEE;color:#C62828"><i class="fas fa-exclamation-triangle"></i></div><div class="reg-type-info"><h4>Complaint</h4><p class="text-sm">Report an issue or grievance</p></div></label>
          <label class="reg-type-card" style="cursor:pointer"><input type="radio" name="type" style="margin-right:8px"><div class="reg-type-icon" style="background:#E3F2FD;color:#1565C0"><i class="fas fa-lightbulb"></i></div><div class="reg-type-info"><h4>Suggestion</h4><p class="text-sm">Propose an improvement</p></div></label>
          <label class="reg-type-card" style="cursor:pointer"><input type="radio" name="type" style="margin-right:8px"><div class="reg-type-icon" style="background:var(--gold-100);color:var(--gold-500)"><i class="fas fa-compass"></i></div><div class="reg-type-info"><h4>Guidance</h4><p class="text-sm">Request information</p></div></label>
        </div>
        <div class="flex justify-between mt-xl"><div></div><button class="btn btn-primary" data-wizard-next>Next: Select Category <i class="fas fa-arrow-right"></i></button></div>
      </div>
    </div>
    <div class="wizard-panel card">
      <div class="card-body p-xl">
        <h3 class="mb-lg">Select Category & Department</h3>
        <div class="form-group"><label class="form-label">Government Level <span class="required">*</span></label><select class="form-select"><option>Select level</option><option>Federal</option><option>Provincial — Punjab</option><option>Provincial — Sindh</option><option>Provincial — KP</option><option>Provincial — Balochistan</option><option>District</option></select></div>
        <div class="form-group"><label class="form-label">Department <span class="required">*</span></label><select class="form-select"><option>Select department</option><option>Highway Authority</option><option>WAPDA / IESCO</option><option>CDA</option><option>Police</option><option>Health Department</option><option>Education Department</option><option>NADRA</option></select></div>
        <div class="flex justify-between mt-xl"><button class="btn btn-secondary" data-wizard-prev><i class="fas fa-arrow-left"></i> Previous</button><button class="btn btn-primary" data-wizard-next>Next: Details <i class="fas fa-arrow-right"></i></button></div>
      </div>
    </div>
    <div class="wizard-panel card">
      <div class="card-body p-xl">
        <h3 class="mb-lg">Complaint Details</h3>
        <div class="form-group"><label class="form-label">Subject <span class="required">*</span></label><input type="text" class="form-input" placeholder="Brief title of your complaint"></div>
        <div class="form-group"><label class="form-label">Description <span class="required">*</span></label><textarea class="form-textarea" placeholder="Provide detailed description of the issue..." style="min-height:150px"></textarea></div>
        <div class="form-row"><div class="form-group"><label class="form-label">District</label><input type="text" class="form-input" placeholder="Enter district"></div><div class="form-group"><label class="form-label">Location Details</label><input type="text" class="form-input" placeholder="Area, street, landmark"></div></div>
        <div class="form-group"><label class="form-label">Attachments</label><div class="file-upload-zone"><div class="icon"><i class="fas fa-cloud-arrow-up"></i></div><p><strong>Click to upload</strong> or drag and drop</p><p class="text-xs text-muted">Images (1MB) · Documents (5MB) · Audio (2MB) · Video (20MB)</p></div></div>
        <div class="flex justify-between mt-xl"><button class="btn btn-secondary" data-wizard-prev><i class="fas fa-arrow-left"></i> Previous</button><button class="btn btn-primary" data-wizard-next>Next: Review <i class="fas fa-arrow-right"></i></button></div>
      </div>
    </div>
    <div class="wizard-panel card">
      <div class="card-body p-xl">
        <h3 class="mb-lg">Review & Submit</h3>
        <div class="card" style="background:var(--gray-50);border:1px dashed var(--gray-300)"><div class="card-body">
          <div class="info-row"><span class="info-label">Type</span><span class="info-value">Complaint</span></div>
          <div class="info-row"><span class="info-label">Level</span><span class="info-value">Provincial — Punjab</span></div>
          <div class="info-row"><span class="info-label">Department</span><span class="info-value">Highway Authority</span></div>
          <div class="info-row"><span class="info-label">Subject</span><span class="info-value">Road damage on GT Road</span></div>
          <div class="info-row"><span class="info-label">Attachments</span><span class="info-value">2 images, 1 document</span></div>
        </div></div>
        <div style="background:var(--green-50);border:1px solid var(--green-200);border-radius:8px;padding:16px;margin-top:16px" class="flex items-center gap-md"><i class="fas fa-info-circle" style="color:var(--green-700);font-size:1.2rem"></i><p class="text-sm">By submitting, you confirm the information is accurate. False or malicious complaints may result in account suspension.</p></div>
        <div class="flex justify-between mt-xl"><button class="btn btn-secondary" data-wizard-prev><i class="fas fa-arrow-left"></i> Previous</button><a href="#complaints" class="btn btn-primary btn-lg"><i class="fas fa-paper-plane"></i> Submit Complaint</a></div>
      </div>
    </div>
  </div>
</div></div></div>`);

/* ==================== PROFILE ==================== */
injectPage('page-profile', `<div class="dashboard-layout">${sidebarCitizen}<div class="main-content">
${headerHTML('Account', 'Profile')}
<div class="page-content">
  <div class="card mb-lg">
    <div class="profile-header">
      <div class="profile-avatar">AK</div>
      <div class="profile-info"><h2>Ahmad Khan</h2><p class="text-muted">Inland Citizen · Member since Jan 2024</p></div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
    <div class="card"><div class="card-header"><h3>Personal Information</h3><button class="btn btn-sm btn-secondary"><i class="fas fa-pen"></i> Edit</button></div><div class="card-body">
      <div class="info-row"><span class="info-label">Full Name</span><span class="info-value">Ahmad Khan</span></div>
      <div class="info-row"><span class="info-label">CNIC</span><span class="info-value">37405-1234567-1</span></div>
      <div class="info-row"><span class="info-label">Date of Birth</span><span class="info-value">15 Jun 1990</span></div>
      <div class="info-row"><span class="info-label">Gender</span><span class="info-value">Male</span></div>
    </div></div>
    <div class="card"><div class="card-header"><h3>Contact Details</h3><button class="btn btn-sm btn-secondary"><i class="fas fa-pen"></i> Edit</button></div><div class="card-body">
      <div class="info-row"><span class="info-label">Mobile</span><span class="info-value">0300-1234567</span></div>
      <div class="info-row"><span class="info-label">Email</span><span class="info-value">ahmad.khan@email.com</span></div>
      <div class="info-row"><span class="info-label">District</span><span class="info-value">Rawalpindi</span></div>
      <div class="info-row"><span class="info-label">Province</span><span class="info-value">Punjab</span></div>
    </div></div>
  </div>
  <div class="card mt-lg"><div class="card-header"><h3>Security</h3></div><div class="card-body flex gap-md">
    <button class="btn btn-secondary"><i class="fas fa-lock"></i> Change Password</button>
    <button class="btn btn-danger"><i class="fas fa-user-slash"></i> Deactivate Account</button>
  </div></div>
</div></div></div>`);

/* ==================== ADMIN DASHBOARD ==================== */
injectPage('page-admin-dashboard', `<div class="dashboard-layout">${sidebarAdmin}<div class="main-content">
${headerHTML('Admin', 'Dashboard')}
<div class="page-content">
  <div class="page-header"><h1>Officer Dashboard</h1><p>Complaint management overview — Highway Authority</p></div>
  <div class="stats-grid">
    <div class="stat-card"><div class="stat-icon purple"><i class="fas fa-inbox"></i></div><div class="stat-info"><div class="stat-value">247</div><div class="stat-label">Total Assigned</div></div></div>
    <div class="stat-card"><div class="stat-icon orange"><i class="fas fa-hourglass-half"></i></div><div class="stat-info"><div class="stat-value">24</div><div class="stat-label">Pending Review</div><div class="stat-trend down">↑ 3 new today</div></div></div>
    <div class="stat-card"><div class="stat-icon green"><i class="fas fa-check-double"></i></div><div class="stat-info"><div class="stat-value">198</div><div class="stat-label">Resolved</div><div class="stat-trend up">80.2% rate</div></div></div>
    <div class="stat-card"><div class="stat-icon red"><i class="fas fa-triangle-exclamation"></i></div><div class="stat-info"><div class="stat-value">5</div><div class="stat-label">SLA Breached</div><div class="stat-trend down">Urgent attention</div></div></div>
  </div>
  <div style="display:grid;grid-template-columns:2fr 1fr;gap:24px">
    <div class="card"><div class="card-header"><h3>Recent Incoming</h3><a href="#admin-complaints" class="btn btn-sm btn-secondary">View Queue</a></div>
      <div class="table-container"><table class="data-table"><thead><tr><th>ID</th><th>Subject</th><th>Citizen</th><th>Status</th><th>SLA</th></tr></thead><tbody>
        <tr onclick="navigateTo('admin-complaint-detail')"><td><strong>CP-00847</strong></td><td>Road damage GT Road</td><td>Ahmad K.</td><td><span class="badge badge-progress">In Progress</span></td><td style="color:var(--green-600)">Day 3/30</td></tr>
        <tr onclick="navigateTo('admin-complaint-detail')"><td><strong>CP-00852</strong></td><td>Bridge crack on M-2</td><td>Sara B.</td><td><span class="badge badge-filed">New</span></td><td style="color:var(--green-600)">Day 1/30</td></tr>
        <tr onclick="navigateTo('admin-complaint-detail')"><td><strong>CP-00741</strong></td><td>Street light malfunction</td><td>Imran A.</td><td><span class="badge badge-escalated">Escalated</span></td><td style="color:var(--status-rejected)">Day 45/30 ⚠️</td></tr>
      </tbody></table></div>
    </div>
    <div class="card"><div class="card-header"><h3>Quick Actions</h3></div><div class="card-body" style="display:flex;flex-direction:column;gap:12px">
      <a href="#admin-complaints" class="quick-action-card"><div class="stat-icon orange" style="width:40px;height:40px;font-size:1rem"><i class="fas fa-inbox"></i></div><span>Review Queue (24)</span></a>
      <a href="#admin-reports" class="quick-action-card"><div class="stat-icon blue" style="width:40px;height:40px;font-size:1rem"><i class="fas fa-chart-pie"></i></div><span>View Reports</span></a>
      <a href="#admin-departments" class="quick-action-card"><div class="stat-icon green" style="width:40px;height:40px;font-size:1rem"><i class="fas fa-building"></i></div><span>Departments</span></a>
    </div></div>
  </div>
</div></div></div>`);

/* ==================== ADMIN COMPLAINTS ==================== */
injectPage('page-admin-complaints', `<div class="dashboard-layout">${sidebarAdmin}<div class="main-content">
${headerHTML('Admin', 'Complaint Queue')}
<div class="page-content">
  <div class="page-header"><h1>Complaint Queue</h1><p>Review and process assigned complaints</p></div>
  <div class="filters-bar">
    <div class="search-input"><span class="icon"><i class="fas fa-search"></i></span><input placeholder="Search complaints..."></div>
    <button class="filter-chip active">All (24)</button><button class="filter-chip">New (8)</button><button class="filter-chip">In Progress (11)</button><button class="filter-chip">Escalated (5)</button>
  </div>
  <div class="card"><div class="table-container"><table class="data-table"><thead><tr><th>ID</th><th>Subject</th><th>Citizen</th><th>Category</th><th>Status</th><th>Filed</th><th>SLA</th></tr></thead><tbody>
    <tr onclick="navigateTo('admin-complaint-detail')"><td><strong>CP-00847</strong></td><td>Road damage GT Road, Rawalpindi</td><td>Ahmad Khan</td><td>Infrastructure</td><td><span class="badge badge-progress">In Progress</span></td><td>28 Mar</td><td style="color:var(--green-600)">Day 3</td></tr>
    <tr onclick="navigateTo('admin-complaint-detail')"><td><strong>CP-00852</strong></td><td>Bridge crack on M-2 Motorway</td><td>Sara Bibi</td><td>Infrastructure</td><td><span class="badge badge-filed">New</span></td><td>29 Mar</td><td style="color:var(--green-600)">Day 2</td></tr>
    <tr onclick="navigateTo('admin-complaint-detail')"><td><strong>CP-00741</strong></td><td>Street light malfunction — Blue Area</td><td>Imran Ali</td><td>Municipal</td><td><span class="badge badge-escalated">Escalated</span></td><td>15 Feb</td><td style="color:var(--status-rejected)">Day 45 ⚠️</td></tr>
    <tr onclick="navigateTo('admin-complaint-detail')"><td><strong>CP-00855</strong></td><td>Pothole on Faizabad interchange</td><td>Zain Ul Haq</td><td>Infrastructure</td><td><span class="badge badge-filed">New</span></td><td>30 Mar</td><td style="color:var(--green-600)">Day 1</td></tr>
    <tr onclick="navigateTo('admin-complaint-detail')"><td><strong>CP-00838</strong></td><td>Missing road signage on N-5</td><td>Fatima Noor</td><td>Safety</td><td><span class="badge badge-progress">In Progress</span></td><td>26 Mar</td><td style="color:var(--status-progress)">Day 5</td></tr>
  </tbody></table></div>
  <div class="card-footer"><div class="pagination"><span class="pagination-info">Showing 1–5 of 24</span><div class="pagination-pages"><button class="page-btn">‹</button><button class="page-btn active">1</button><button class="page-btn">2</button><button class="page-btn">3</button><button class="page-btn">›</button></div></div></div>
  </div>
</div></div></div>`);

/* ==================== ADMIN COMPLAINT DETAIL ==================== */
injectPage('page-admin-complaint-detail', `<div class="dashboard-layout">${sidebarAdmin}<div class="main-content">
${headerHTML('Queue', 'CP-2026-00847')}
<div class="page-content">
  <a href="#admin-complaints" class="btn btn-sm btn-secondary mb-lg"><i class="fas fa-arrow-left"></i> Back to Queue</a>
  <div class="detail-header">
    <div class="flex justify-between items-center" style="flex-wrap:wrap;gap:12px">
      <div><div class="detail-id">CP-2026-00847 · Filed by Ahmad Khan (37405-1234567-1)</div><h2 class="detail-title">Road damage on GT Road, Rawalpindi</h2></div>
      <div class="flex gap-md">
        <button class="btn btn-secondary"><i class="fas fa-share"></i> Forward</button>
        <button class="btn btn-primary"><i class="fas fa-check-circle"></i> Resolve</button>
      </div>
    </div>
  </div>
  <div class="detail-grid">
    <div>
      <div class="card mb-lg"><div class="card-header"><h3>Complaint Details</h3></div><div class="card-body">
        <div class="info-row"><span class="info-label">Type</span><span class="info-value">Complaint</span></div>
        <div class="info-row"><span class="info-label">Category</span><span class="info-value">Infrastructure</span></div>
        <div class="info-row"><span class="info-label">Department</span><span class="info-value">Highway Authority — Punjab</span></div>
        <div class="info-row"><span class="info-label">District</span><span class="info-value">Rawalpindi</span></div>
        <div class="info-row"><span class="info-label">SLA</span><span class="info-value" style="color:var(--green-600)">Day 3 of 30 — Within SLA</span></div>
      </div></div>
      <div class="card mb-lg"><div class="card-header"><h3>Description</h3></div><div class="card-body"><p style="line-height:1.8;color:var(--gray-700)">Significant road damage on GT Road near Rawalpindi Cantt causing risk to vehicles. Multiple potholes spanning ~500 meters. Several accidents reported.</p></div></div>
      <div class="card"><div class="card-header"><h3>Take Action</h3></div><div class="card-body">
        <div class="form-group"><label class="form-label">Resolution Outcome</label><select class="form-select"><option>Select outcome</option><option>Relief Granted</option><option>Partial Relief Granted</option><option>Relief Cannot Be Granted</option></select></div>
        <div class="form-group"><label class="form-label">Officer Remarks</label><textarea class="form-textarea" placeholder="Add your remarks and resolution details..."></textarea></div>
        <div class="flex gap-md"><button class="btn btn-primary"><i class="fas fa-check"></i> Submit Resolution</button><button class="btn btn-secondary"><i class="fas fa-share"></i> Forward to Another Dept</button></div>
      </div></div>
    </div>
    <div>
      <div class="card mb-lg"><div class="card-header"><h3>Timeline</h3></div><div class="card-body">
        <div class="timeline">
          <div class="timeline-item completed"><div class="timeline-dot"></div><div class="timeline-content"><h4>Filed</h4><p>Ahmad Khan</p><div class="date">28 Mar, 10:30 AM</div></div></div>
          <div class="timeline-item completed"><div class="timeline-dot"></div><div class="timeline-content"><h4>Received</h4><p>Auto-routed to Highway Authority</p><div class="date">28 Mar, 02:15 PM</div></div></div>
          <div class="timeline-item current"><div class="timeline-dot"></div><div class="timeline-content"><h4>Under Examination</h4><p>Survey team dispatched</p><div class="date">30 Mar, 09:00 AM</div></div></div>
        </div>
      </div></div>
      <div class="card"><div class="card-header"><h3>Citizen Info</h3></div><div class="card-body">
        <div class="info-row"><span class="info-label">Name</span><span class="info-value">Ahmad Khan</span></div>
        <div class="info-row"><span class="info-label">CNIC</span><span class="info-value">37405-1234567-1</span></div>
        <div class="info-row"><span class="info-label">Mobile</span><span class="info-value">0300-1234567</span></div>
        <div class="info-row"><span class="info-label">Total Complaints</span><span class="info-value">12</span></div>
      </div></div>
    </div>
  </div>
</div></div></div>`);

/* ==================== ADMIN DEPARTMENTS ==================== */
injectPage('page-admin-departments', `<div class="dashboard-layout">${sidebarAdmin}<div class="main-content">
${headerHTML('Admin', 'Departments')}
<div class="page-content">
  <div class="flex justify-between items-center mb-lg" style="flex-wrap:wrap;gap:12px">
    <div class="page-header" style="margin-bottom:0"><h1>Departments</h1><p>Manage departments and focal persons</p></div>
    <button class="btn btn-primary"><i class="fas fa-plus"></i> Add Department</button>
  </div>
  <div class="card"><div class="table-container"><table class="data-table"><thead><tr><th>Department</th><th>Level</th><th>Focal Person</th><th>Active Complaints</th><th>Resolved</th><th>Avg. Resolution</th></tr></thead><tbody>
    <tr><td><strong>Highway Authority</strong></td><td>Federal</td><td>Engr. Bilal Ahmed</td><td>24</td><td>198</td><td>12 days</td></tr>
    <tr><td><strong>CDA — Water Wing</strong></td><td>Federal</td><td>Sadia Malik</td><td>18</td><td>245</td><td>8 days</td></tr>
    <tr><td><strong>IESCO</strong></td><td>Federal</td><td>Kamran Javed</td><td>31</td><td>412</td><td>15 days</td></tr>
    <tr><td><strong>Punjab Police</strong></td><td>Provincial</td><td>DIG Ops</td><td>56</td><td>890</td><td>18 days</td></tr>
    <tr><td><strong>Health Dept — Punjab</strong></td><td>Provincial</td><td>Dr. Amina Shah</td><td>22</td><td>178</td><td>10 days</td></tr>
    <tr><td><strong>NADRA</strong></td><td>Federal</td><td>Ali Raza</td><td>45</td><td>1,203</td><td>21 days</td></tr>
  </tbody></table></div></div>
</div></div></div>`);

/* ==================== ADMIN REPORTS ==================== */
injectPage('page-admin-reports', `<div class="dashboard-layout">${sidebarAdmin}<div class="main-content">
${headerHTML('Admin', 'Reports')}
<div class="page-content">
  <div class="page-header"><h1>Reports & Analytics</h1><p>Performance metrics and complaint analytics</p></div>
  <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
    <div class="stat-card"><div class="stat-icon green"><i class="fas fa-percentage"></i></div><div class="stat-info"><div class="stat-value">80.2%</div><div class="stat-label">Resolution Rate</div><div class="stat-trend up">↑ 2.1% vs last month</div></div></div>
    <div class="stat-card"><div class="stat-icon blue"><i class="fas fa-clock"></i></div><div class="stat-info"><div class="stat-value">14.2</div><div class="stat-label">Avg. Days to Resolve</div><div class="stat-trend up">↓ 1.8 days improvement</div></div></div>
    <div class="stat-card"><div class="stat-icon gold"><i class="fas fa-star"></i></div><div class="stat-info"><div class="stat-value">4.1/5</div><div class="stat-label">Citizen Satisfaction</div><div class="stat-trend up">↑ 0.3 improvement</div></div></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
    <div class="card"><div class="card-header"><h3>Complaints by Category</h3></div><div class="card-body">
      <div style="display:flex;flex-direction:column;gap:12px">
        <div><div class="flex justify-between text-sm mb-sm"><span>Infrastructure</span><span class="text-muted">35%</span></div><div style="height:8px;background:var(--gray-200);border-radius:4px;overflow:hidden"><div style="width:35%;height:100%;background:var(--green-600);border-radius:4px"></div></div></div>
        <div><div class="flex justify-between text-sm mb-sm"><span>Utilities</span><span class="text-muted">28%</span></div><div style="height:8px;background:var(--gray-200);border-radius:4px;overflow:hidden"><div style="width:28%;height:100%;background:var(--status-filed);border-radius:4px"></div></div></div>
        <div><div class="flex justify-between text-sm mb-sm"><span>Municipal</span><span class="text-muted">20%</span></div><div style="height:8px;background:var(--gray-200);border-radius:4px;overflow:hidden"><div style="width:20%;height:100%;background:var(--status-progress);border-radius:4px"></div></div></div>
        <div><div class="flex justify-between text-sm mb-sm"><span>Safety</span><span class="text-muted">12%</span></div><div style="height:8px;background:var(--gray-200);border-radius:4px;overflow:hidden"><div style="width:12%;height:100%;background:var(--status-escalated);border-radius:4px"></div></div></div>
        <div><div class="flex justify-between text-sm mb-sm"><span>Other</span><span class="text-muted">5%</span></div><div style="height:8px;background:var(--gray-200);border-radius:4px;overflow:hidden"><div style="width:5%;height:100%;background:var(--gray-400);border-radius:4px"></div></div></div>
      </div>
    </div></div>
    <div class="card"><div class="card-header"><h3>Monthly Trend</h3></div><div class="card-body">
      <div style="display:flex;align-items:flex-end;gap:12px;height:200px;padding-top:20px">
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:100%;background:var(--green-500);border-radius:4px 4px 0 0;height:120px"></div><span class="text-xs text-muted">Oct</span></div>
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:100%;background:var(--green-500);border-radius:4px 4px 0 0;height:90px"></div><span class="text-xs text-muted">Nov</span></div>
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:100%;background:var(--green-500);border-radius:4px 4px 0 0;height:140px"></div><span class="text-xs text-muted">Dec</span></div>
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:100%;background:var(--green-500);border-radius:4px 4px 0 0;height:160px"></div><span class="text-xs text-muted">Jan</span></div>
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:100%;background:var(--green-500);border-radius:4px 4px 0 0;height:130px"></div><span class="text-xs text-muted">Feb</span></div>
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px"><div style="width:100%;background:var(--green-700);border-radius:4px 4px 0 0;height:175px"></div><span class="text-xs text-muted">Mar</span></div>
      </div>
    </div></div>
  </div>
</div></div></div>`);
