import './Experience.css';

export default function Experience({ logo, start, end, title, link }) {
  const content = (
    <>
      {logo && (
        <div className="experience-logo">
          <img src={logo} alt="company logo" />
        </div>
      )}
      <div className="experience-info">
        <div className="experience-dates">{start} – {end}</div>
        <div className="experience-title">{title}</div>
      </div>
    </>
  );

  return link ? (
    <a className="experience-item" href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <div className="experience-item">
      {content}
    </div>
  );
}
