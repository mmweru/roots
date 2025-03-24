import React, { useState } from "react";
import "./ProjectDetailsPage.css";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProjectDetailsPage = ({ isDarkMode }) => {
  // State for tracking which cards are expanded
  const [expandedSections, setExpandedSections] = useState({
    overview: false,
    impact: false,
    investment: false,
    team: false,
    dueDiligence: false
  });

  // Function to toggle card expansion
  const toggleExpand = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  return (
    <div className={`project-details-page ${isDarkMode ? "dark" : ""}`}>
      <header className="page-header">
        <h1 className="page-title">Project Overview</h1>
        <p className="page-subheading">
          Providing detailed information to help investors make an informed decision.
        </p>
      </header>

      <div className="cards-container">
        {/* Project Overview Card */}
        <div className="card">
          <div 
            className="card-header" 
            onClick={() => toggleExpand("overview")}
          >
            <h2>Project Overview</h2>
            {expandedSections.overview ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
          {expandedSections.overview && (
            <div className="card-content">
              <p>
                This is a detailed description of the project, its goals, farm
                details, and the impact goals that align with regenerative agriculture.
              </p>
            </div>
          )}
        </div>

        {/* Impact Metrics Card */}
        <div className="card">
          <div 
            className="card-header" 
            onClick={() => toggleExpand("impact")}
          >
            <h2>Impact Metrics</h2>
            {expandedSections.impact ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
          {expandedSections.impact && (
            <div className="card-content">
              <ul>
                <li>Biodiversity Improvement: 50%</li>
                <li>Water Conservation: 30% reduction in usage</li>
                <li>CO2 Offset: 20 tons per year</li>
              </ul>
            </div>
          )}
        </div>

        {/* Investment Structure Card */}
        <div className="card">
          <div 
            className="card-header" 
            onClick={() => toggleExpand("investment")}
          >
            <h2>Investment Structure</h2>
            {expandedSections.investment ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
          {expandedSections.investment && (
            <div className="card-content">
              <p>
                The project offers multiple funding stages with a profit-sharing model and projected return timelines. 
                Investors can track their investment growth and receive timely reports.
              </p>
            </div>
          )}
        </div>

        {/* Team & Partners Card */}
        <div className="card">
          <div 
            className="card-header" 
            onClick={() => toggleExpand("team")}
          >
            <h2>Team & Partners</h2>
            {expandedSections.team ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
          {expandedSections.team && (
            <div className="card-content">
              <p>
                Our team consists of seasoned professionals in regenerative agriculture, 
                supported by NGO and academic partners to ensure the project's success.
              </p>
            </div>
          )}
        </div>

        {/* Due Diligence Card */}
        <div className="card">
          <div 
            className="card-header" 
            onClick={() => toggleExpand("dueDiligence")}
          >
            <h2>Due Diligence</h2>
            {expandedSections.dueDiligence ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
          {expandedSections.dueDiligence && (
            <div className="card-content">
              <ul>
                <li>Risk Assessments: Completed</li>
                <li>Environmental Impact Assessments: Ongoing</li>
                <li>Verification Documents: Available for review</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="action-buttons">
        <Link to="/invest" className="btn-invest">Invest Now</Link>
        <Link to="/watchlist" className="btn-watchlist">Add to Watchlist</Link>
        <Link to="/contact-team" className="btn-contact">Contact Project Team</Link>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;