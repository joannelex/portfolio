import './Header.css';

export default function Header({ activeSection }) {
  const isActive = (section) => activeSection === section ? 'active' : '';

  return (
    <header className="header">
      <div className="logo">j</div>
      <div className="nav-links">
        <a href="#about" className={isActive('about')}>about</a>
        <a href="#work" className={isActive('work')}>work</a>
        {/* <a href="#education" className={isActive('education')}>education</a>
        <a href="#contact" className={isActive('contact')}>contact</a> */}
      </div>
    </header>
  );
}
