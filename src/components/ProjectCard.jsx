import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard({
  image,
  date,
  name,
  description,
  to,
  isDisabled = false,
  disabledTooltip = "🚧 Under Construction 🚧",
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isDisabled) navigate(to);
  };

  return (
    <div
      className={`project-card ${isDisabled ? 'disabled' : ''}`}
      onClick={handleClick}
    >
      {isDisabled && (
        <div className="project-disabled-label">
          {disabledTooltip}
        </div>
      )}

      {image && (
        <div className="project-card-image">
          <img src={image} alt={`${name} mock`} />
        </div>
      )}

      <div className="project-card-info">
        <p className="project-card-date">{date}</p>
        <p className="project-card-name">{name}</p>
        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
}
