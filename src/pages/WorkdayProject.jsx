import { useNavigate } from 'react-router-dom';
import React from 'react';
import './NomProject.css';

export default function WorkdayProject() {
  const navigate = useNavigate();

  return (
    <div className="project-page">
      <div className="project-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← back to projects
        </button>
      </div>

      <h3 style={{marginTop: '12rem'}}> 🚧 UNDER CONSTRUCTION 🚧</h3>
    </div>
  );
}
