import Cloud from '../assets/Cloud';
import './About.css';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [headerRef, isVisible] = useInView({ threshold: 0.3 });

    return (
      <section className="about">
        <div className="about-container">
          <div className='about-top-container'></div>
          {/* <div className='about-text'>  */}
          <div ref={headerRef} className={`about-text fade-in-up ${isVisible ? 'visible' : ''}`}>
            <h2>good to see you here (:</h2>
            <p>
              I like to create things that connect people—things that bring spark. Things that make you smile. Delightful micro-moments. <br />
              Sometimes it’s a product that solves a real problem, or a it’s a design that just feels right. <br />
              Something that says: I was here, and I cared.
            </p>
            <p>
              This portfolio is a reflection of how I’m finding my way—building experiences that connect with people. 
            </p>
          </div>
          
          
        </div>
        <div className='about-clouds-container'>
            <div className='about-cloud-left'>
              <Cloud />
            </div>
            <div className='about-cloud-right'>
              <Cloud />
            </div>
          </div>
      </section>
    );
  }
  