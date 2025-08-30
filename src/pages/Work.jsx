// import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import './Work.css';
import Experience from '../components/Experience';
import WealthsimpleLogo from '../assets/images/ws.png';
import AWSLogo from '../assets/images/zon.png';
import SAPLogo from '../assets/images/sap.png';
import TruliooLogo from '../assets/images/trulioo.png';
import NwPlusLogo from '../assets/images/nwplus.png';
import CsssLogo from '../assets/images/csss.png';
import Cloud from '../assets/Cloud';
import ArrowDown from '../assets/ArrowDown';
import ProjectCard from '../components/ProjectCard';
import { useSearchParams } from 'react-router-dom';


export default function Work() {
  const [headerRef, isVisible] = useInView({ threshold: 0.3 });
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'design';

  const setActiveTab = (tab) => {
    setSearchParams({ tab });
};

  return (
    <section className="work-container">
        <div className="work-tabs">
          <button
            className={activeTab === 'swe' ? 'active' : ''}
            onClick={() => setActiveTab('swe')}
          >
            SWE
          </button>
          <button
            className={activeTab === 'design' ? 'active' : ''}
            onClick={() => setActiveTab('design')}
          >
            DESIGN
          </button>
          {/* <button
            className={activeTab === 'pm' ? 'active' : ''}
            onClick={() => setActiveTab('pm')}
          >
            pm
          </button> */}
        </div>

        <div className='work-content'>
          {activeTab === 'swe' && (
            <div className='work-content-container'>
              <div ref={headerRef} className={`work-header-container fade-in-up ${isVisible ? 'visible' : ''}`}>
                <h2>software</h2>
                <p>
                  Fun fact: I thought I’d be a med student until my first programming
                  class at UBC. I was hooked by the idea of creating through problem solving and turning
                  logic into something real.
                </p>
                <p>
                  This section is a collection of the projects, systems, and ideas I’ve brought to
                  life—each one a step in how I’m learning to think, build, and care with code.
                </p>
              </div>

              <div className='work-experience-containter'>
                <h3>experience</h3>
                <div className="work-experience-grid">
                  <Experience 
                    logo={WealthsimpleLogo} 
                    start="05/2025" end="present" 
                    title="swe intern @ Wealthsimple" 
                    link="https://www.wealthsimple.com/en-ca/about"
                  />
                  <Experience 
                    logo={AWSLogo} 
                    start="05/2024" end="09/2024" 
                    title="swe intern @ aws" 
                    link="https://aws.amazon.com/"
                  />
                  <Experience 
                    logo={SAPLogo} 
                    start="05/2025" end="present" 
                    title="swe intern @ SAP Concur" 
                    link="https://www.concur.ca/"
                  />
                  <Experience 
                    logo={TruliooLogo} 
                    start="05/2025" end="present" 
                    title="swe intern @ Trulioo" 
                    link="https://www.trulioo.com/"
                  />
                </div>
              </div>
              <div className='work-cloud-swe'>
                <Cloud />
              </div>

              <div className="work-scroll-indicator">
                <p className="tagline">view projects</p>
                <ArrowDown />
              </div>

              <div className="work-projects">
                <h3 style={{marginBottom:"64px", marginLeft:"64px"}}>projects</h3>
                <p style={{marginLeft:"64px"}}> 🚧 UNDER CONSTRUCTION 🚧 </p>
              </div>
              
            </div>
          )}

          {activeTab === 'design' && (
            <div className='work-content-container'>
              <div ref={headerRef} className={`work-header-container fade-in-up ${isVisible ? 'visible' : ''}`}>
                <h2>design</h2>
                <p>
                  Its about how something makes you feel before you even realize it. 
                  I’m drawn to the challenge of shaping those moments—making the complex feel simple, and the simple feel meaningful.
                </p>
                <p>
                  This section is a glimpse into the products, visuals, and stories I’ve designed to do just that.
                </p>
              </div>

              <div className='work-experience-containter'>
                <h3>experience</h3>
                <div style={{ paddingTop:50, paddingLeft: 60 }}>
                  <div style={{ marginBottom: 30 }}>
                    <Experience 
                      logo={NwPlusLogo} 
                      start="09/2023" end="04/2024" 
                      title="design coordinator @ nwPlus" 
                      link="https://www.nwplus.io/"
                    />
                  </div>
                  <Experience 
                    logo={CsssLogo} 
                    start="09/2023" end="04/2024" 
                    title="designer @ UBC Computer Science Student Society" 
                    link="https://ubccsss.org/"
                  />
                </div>
              </div>
              <div className='work-cloud-design'>
                <Cloud />
              </div>

              <div className="work-scroll-indicator">
                <p className="tagline">view projects</p>
                <ArrowDown />
              </div>

              <div className="work-projects">
                <h3 style={{marginBottom:"64px", marginLeft:"64px"}}>projects</h3>
                <div className='work-projects-container'>
                  <ProjectCard
                    image={require('../assets/images/saveSimple.png')}
                    date="06/2025"
                    name="SaveSimple"
                    description="A smart budgeting tool that turns financial intentions into actionable savings plans"
                    to="/projects/saveSimple"
                  />
                  <ProjectCard
                    image={require('../assets/images/nom.png')}
                    date="01/2025"
                    name="Nom"
                    description="Your effortless dining companion"
                    to="/projects/nom"
                  />
                  <ProjectCard
                    image={require('../assets/images/344.png')}
                    date="01/2025"
                    name="Workday calendar redesign"
                    description="Reimagining course registration for UBC students"
                    to="/projects/workday"
                  />
                </div>
                <div className='work-projects-container'>
                  <ProjectCard
                    image={require('../assets/images/pluto.png')}
                    date="09/2022"
                    name="Pluto"
                    description="Improving productivity for hackathon organizers"
                    to="/projects/pluto"
                  />
                  <ProjectCard
                    image={require('../assets/images/nwhacks.png')}
                    date="09/2024"
                    name="Hackathon websites"
                    description="Web design for Western Canada's largest hackathons"
                    to="/projects/hackathon-websites"
                  />
                </div>
              </div>
            </div>
          )}      

          {activeTab === 'pm' && (
            <div>
              <h2>pm</h2>
              <p>Docs, product thinking, and team wrangling 👩‍💻</p>

              <div className="work-projects">
                <h3 style={{marginBottom:"64px", marginLeft:"64px"}}>projects</h3>
                <p style={{marginLeft:"64px"}}> 🚧 UNDER CONSTRUCTION 🚧 </p>
              </div>

            </div>
          )}
        </div>
    </section>
  );
}
