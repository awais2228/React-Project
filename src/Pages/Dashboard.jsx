import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Candidates from "./Candidates"; // Import your Candidates component
import Internships from "./Internships";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderContent = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <div className="p-4">
            <h2 style={{ color: "#4F46E5" }}>Welcome to InternHub!</h2>
            <p className="text-muted">
              This is your simple dashboard page with a themed layout.
            </p>
          </div>
        );
      case "candidates":
        return <Candidates />;
      case "internships": // 👈 New case
        return <Internships />;
      default:
        return null;
    }
  };

  return (
    <div
      className="d-flex"
      style={{
        height: "100vh",
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#F9FAFB",
      }}
    >
      {/* Sidebar */}
      <div
        className="p-3"
        style={{ width: "250px", backgroundColor: "#4F46E5", color: "white" }}
      >
        <h4 className="mb-4">🎓 InternHub</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <button
              onClick={() => setCurrentPage("dashboard")}
              className="btn btn-link text-white text-start w-100"
            >
              📊 Dashboard
            </button>
          </li>
          <li className="nav-item mb-2">
            <button
              onClick={() => setCurrentPage("candidates")}
              className="btn btn-link text-white text-start w-100"
            >
              👤 Candidates
            </button>
          </li>
          <li className="nav-item mb-2">
            <button
              onClick={() => setCurrentPage("internships")}
              className="btn btn-link text-white text-start w-100"
            >
              💼 Internships
            </button>
          </li>
          <li className="nav-item">
            <button className="btn btn-link text-white text-start w-100">
              ⚙️ Profile
            </button>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-grow-1">
        {/* Topbar */}
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom bg-white shadow-sm">
          <h5 className="mb-0" style={{ color: "#4F46E5" }}>
            {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
          </h5>
          <div className="d-flex align-items-center gap-3">
            <span className="fw-medium">John Doe</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-circle border"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
