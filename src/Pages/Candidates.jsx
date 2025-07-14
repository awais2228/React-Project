import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialCandidates = [
  { name: 'Alice Johnson', email: 'alice@example.com', internship: 'Frontend Developer', status: 'Pending' },
  { name: 'Bob Smith', email: 'bob@example.com', internship: 'Backend Developer', status: 'Approved' },
  { name: 'Clara Lee', email: 'clara@example.com', internship: 'UI/UX Designer', status: 'Rejected' },
];

const Candidates = () => {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', internship: '', status: 'Pending' });

  const handleAddCandidate = () => {
    if (!form.name || !form.email || !form.internship || !form.status) return;
    setCandidates([...candidates, form]);
    setForm({ name: '', email: '', internship: '', status: 'Pending' });
    setShowModal(false);
  };

  const filtered = candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getBadgeColor = (status) => {
    switch (status) {
      case 'Approved': return 'success';
      case 'Rejected': return 'danger';
      default: return 'warning';
    }
  };

  return (
    <div className="p-4" style={{ backgroundColor: '#F9FAFB', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 style={{ color: '#4F46E5' }}>Candidates</h3>
        <button className="btn" style={{ backgroundColor: '#4F46E5', color: 'white' }} onClick={() => setShowModal(true)}>
          + Add Candidate
        </button>
      </div>

      <input
        type="text"
        className="form-control mb-3 shadow-sm"
        placeholder="Search by name or email"
        style={{ maxWidth: '300px' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="card shadow-sm border-0">
        <div className="card-body p-0">
          <table className="table table-hover align-middle mb-0">
            <thead style={{ backgroundColor: '#E5E7EB' }}>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Internship</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr key={i}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.internship}</td>
                  <td>
                    <span className={`badge bg-${getBadgeColor(c.status)}`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center text-muted">No candidates found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.4)' }}>
          <div className="modal-dialog">
            <div className="modal-content shadow">
              <div className="modal-header" style={{ backgroundColor: '#4F46E5', color: 'white' }}>
                <h5 className="modal-title">Add Candidate</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Internship Title</label>
                  <select
                    className="form-select"
                    value={form.internship}
                    onChange={(e) => setForm({ ...form, internship: e.target.value })}
                    required
                  >
                    <option value="">Select Internship</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    required
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="btn btn-success" onClick={handleAddCandidate}>Add</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Candidates;
