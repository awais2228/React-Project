import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Internships = () => {
  const [internships, setInternships] = useState([
    {
      title: "Frontend Intern",
      description: "Work on responsive UI using React and Bootstrap.",
      department: "Development",
      duration: 8,
      stipend: "₹5,000",
      status: "Open",
    },
    {
      title: "Backend Intern",
      description: "Build REST APIs using Node.js and MongoDB.",
      department: "Development",
      duration: 6,
      stipend: "₹4,000",
      status: "Closed",
    },
    {
      title: "UI/UX Intern",
      description: "Design mobile-first interfaces and conduct user research.",
      department: "Design",
      duration: 3,
      stipend: "₹3,000",
      status: "Open",
    },
    {
      title: "Data Science Intern",
      description:
        "Assist in building ML models and data visualization dashboards.",
      department: "Analytics",
      duration: 12,
      stipend: "₹8,000",
      status: "Open",
    },
    {
      title: "Marketing Intern",
      description: "Manage social media campaigns and engagement analytics.",
      department: "Marketing",
      duration: 4,
      stipend: "₹3,500",
      status: "Closed",
    },
    {
      title: "DevOps Intern",
      description: "Support CI/CD setup and cloud infrastructure monitoring.",
      department: "IT Operations",
      duration: 5,
      stipend: "₹6,000",
      status: "Open",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    department: "",
    duration: "",
    stipend: "",
    status: "Open",
  });

  const [showModal, setShowModal] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddInternship = () => {
    setInternships([...internships, form]);
    setForm({
      title: "",
      description: "",
      department: "",
      duration: "",
      stipend: "",
      status: "Open",
    });
    setShowModal(false); // close modal after adding
  };

  return (
    <>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Internships</h3>
          <input
            className="btn btn-primary"
            type="button"
            value="Post New Internship"
            onClick={() => setShowModal(!showModal)}
          />
        </div>

        {showModal && (
          <div
            className="modal d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Post New Internship</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="form-control mb-2"
                    value={form.title}
                    onChange={handleOnChange}
                  />
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    className="form-control mb-2"
                    value={form.description}
                    onChange={handleOnChange}
                  />
                  <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    className="form-control mb-2"
                    value={form.department}
                    onChange={handleOnChange}
                  />
                  <input
                    type="number"
                    name="duration"
                    placeholder="Duration"
                    className="form-control mb-2"
                    value={form.duration}
                    onChange={handleOnChange}
                  />
                  <input
                    type="text"
                    name="stipend"
                    placeholder="Stipend"
                    className="form-control mb-2"
                    value={form.stipend}
                    onChange={handleOnChange}
                  />
                  <select
                    name="status"
                    className="form-select mb-2"
                    value={form.status}
                    onChange={handleOnChange}
                  >
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddInternship}
                  >
                    Add to List
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="row">
        {internships.map((internship, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{internship.title}</h5>
                <p className="card-text">{internship.description}</p>
                <p className="card-text">
                  <strong>Department:</strong> {internship.department}
                </p>
                <p className="card-text">
                  <strong>Duration:</strong> {internship.duration} months
                </p>
                <p className="card-text">
                  <strong>Stipend:</strong> {internship.stipend}
                </p>
                <p className="card-text">
                  <strong>Status:</strong> {internship.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Internships;
