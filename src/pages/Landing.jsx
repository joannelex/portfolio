import './Landing.css';
import ArrowDown from '../assets/ArrowDown'; 
import Bee from '../assets/Bee'; 
import Cloud from '../assets/Cloud';

export default function Landing() {
  return (
    <section className="landing">
      <div className="landing-container">
        <div className="landing-top">
          <div className='landing-bee'>
            <Bee />
          </div>

          <div className="landing-row">
            <div className='landing-headers'>
              <div style={{ fontSize:"20px" }}>Hey! My name is</div>
              <div className="name">joanne</div>
              <p style={{ fontSize:"20px", marginTop:"40px" }}>and I like crafting delight with DESIGN and CODE</p>
            </div>
            <div className="landing-nav-links">
                <a href="#about">about</a>
                <a href="#work">work</a>
                {/* <a href="#education">education</a>
                <a href="#contact">contact</a> */}
            </div>
          </div>
        </div>

        <div className="landing-bottom">
          <div className="cloud cloud-left"><Cloud /></div>

          <div className="scroll-indicator">
            <p className="tagline">welcome to my pixel playground</p>
            <ArrowDown />
          </div>

          <div className="cloud cloud-right"><Cloud /></div>
        </div>
      </div>
    </section>
  );
}
