import './ProjectCard.css';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ image, date, name, description, to }) {
  const navigate = useNavigate();

  return (
    <div className="project-card" onClick={() => navigate(to)}>
      {image && (
        <div className="project-card-image">
          <img src={image} alt={`${name} mock`} />
        </div>
      )}
      <div className="project-card-info">
        <text className="project-card-date">{date}</text>
        <text className="project-card-name">{name}</text>
        <text className="project-card-description">{description}</text>
      </div>
    </div>
  );
}
