import { useNavigate } from 'react-router-dom';
import React from 'react';
import './NomProject.css';

import NomHero from '../assets/images/nom/nom-hero.png'; 
import NomChat from '../assets/images/nom/nom-chat.png';
import NomUserFlow from '../assets/images/nom/nom-user-flows.png';
import Nommers from '../assets/images/nom/nom-nommers.png';
import NommerTile from '../assets/images/nom/nom-nommer-tile.png';
import NomIdeas from '../assets/images/nom/nom-ideas.png';
import NomHifi from '../assets/images/nom/nom-hifi.png';

export default function SaveSimplyProject() {
  const navigate = useNavigate();

  return (
    <div className="project-page">
      <div className="project-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← back to projects
        </button>
      </div>

      <div className="project-hero">
        <img src={NomHero} alt="Nom Hero" />
      </div>

      <div className="project-meta">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span>Team: 1 Designer, 3 Engineers</span>
          <span>Role: Frontend developer + Visual design</span>
        </div>
        <span style={{ textAlign: 'right' }}>Tech: NextJS, React, Express, Firebase, bland.ai, Figma</span>
      </div>

      <div className="project-problem">
        <h3>Problem - Decisions, decisions, decisions”</h3>
        <p>It always starts the same way: someone asks, “Where should we eat?”  And then... silence.</p>
        <img src={NomChat} alt="Nom Chat" className='project-nom-chat' />
        <p>Or worse — an endless scroll of messages: “I’m good with anything!” → “How about sushi?” → “I had sushi yesterday.” → “Okay, Korean?” → “Too far.”</p><br/>
        <p>
            In our case, this scenario played out daily in our team’s Slack chat. Every time lunchtime rolled around, we would get stuck in a cycle of indecision. 
            With a mix of dietary restrictions, personal tastes, and busy schedules, finding a place everyone was happy with became a mental tax — the kind of 
            small friction that drains time and energy.
        </p><br/>
        <p>
            We realized this wasn’t just our problem — it’s universal. Group decision-making around dining tends to fall apart because:
        </p>


        <div className="problem-list">
          <div style={{ color: '#FE7EB8' }}>
            <div className='project-row' style={{ alignItems: 'end', marginBottom: '14px' }}>
              <span className='problem-list-number'>01</span>
              <p><strong>Too many preferences to juggle</strong></p>
            </div>
            <p>Everyone has their own dietary needs and taste profiles — but there’s no easy way to balance them.</p>
          </div>

          <div style={{ color: '#FEA386' }}>
            <div className='project-row' style={{ alignItems: 'end', marginBottom: '14px' }}>
              <span className='problem-list-number'>02</span>
              <p><strong>Social hesitation</strong></p>
            </div>
            <p>People often default to “I’m fine with anything” to avoid being the “difficult one,” which paradoxically makes decisions harder.</p>
          </div>

          <div style={{ color: '#FFC35B' }}>
            <div className='project-row' style={{ alignItems: 'end', marginBottom: '14px' }}>
              <span className='problem-list-number'>03</span>
              <p><strong>Coordination overhead</strong></p>
            </div>
            <p>Once a place is finally chosen, someone still needs to book a table — another task that often falls through the cracks.</p>
          </div>
        </div>
      </div>

      <div className="project-backstory">
        <h3>tldr</h3>
        <div className='project-backstory-text'>
          <p>
            Nom is a <strong>Progressive Web App (PWA)</strong> designed to streamline group dining decisions. By curating personalized restaurant recommendations 
            based on group location, dietary restrictions, and taste preferences, Nom <strong>simplifies the decision-making process</strong> and <strong>automates reservation booking</strong> — eliminating the common friction of “Where should we eat?”
          </p><br/>
          <p>
            On the day of the outing, the group votes on their favorite restaurant in-app, and Nom handles the rest — seamlessly securing a reservation at the winning spot.
          </p>
        </div>
      </div>



      <div className="project-process-section">
        <h3 className="project-gradient-text project-process-title">A solution that just works — so you can focus on the fun</h3>
        <div style={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
            <p>
                To define our MVP, our designer and I collaborated on user stories and mapped out key user flows. The goal was to keep 
                the experience minimal, intuitive, and delightful — focusing on how Nom could fit seamlessly into social routines.
            </p>

            <p>
                Here’s how it works:
            </p>
            <ol style={{ marginTop:'2rem'}}>
                <li><strong>Personalized recommendations, powered by your group’s profile</strong>: Nom curates 3 restaurant options based on: 
                    <ul>
                        <li>Location</li>
                        <li>Dietary restrictions</li>
                        <li>Individual preferences</li>
                    </ul>
                </li>
                <li><strong>In-app voting</strong>: On the day of the outing, your group simply votes on their favourite pick.</li>
                <li><strong>Automatic reservation booking</strong>: Once a winner is chosen, Nom handles the reservation automatically via an AI agent. No one has to play phone tag with the restaurant.</li>
            </ol>
        </div>

        <img src={NomUserFlow} alt="User flow" className='ss-image-container' style={{width: '60%', marginTop: '4rem'}}/>
      </div>

      <div className="project-process-section">
        <h3 className="project-gradient-text project-process-title">Now, it was time to cook</h3>
        <div className='project-sub-content-container'>
          <h4>1. Visual Identity & UI/UX</h4>
          <div>
            <p className='project-solution-text'>
                I developed the brand identity, focusing on playful visuals that would resonate with a diverse audience. This included crafting our mascots, the nommers — expressive, vibrant creatures that inject personality into the app and enhance the user experience.
            </p>
            <img src={Nommers} alt="Nommers" className='ss-image-container' style={{ width: '30%', marginLeft:'12rem', marginTop:'4rem', marginBottom:'4rem' }} />
            <p>The <strong>nommers</strong> serve as both visual cues and a lighthearted element that differentiates Nom from typical utilitarian dining apps. Don’t they look so nommable?</p>
            <img src={NommerTile} alt="Nommer Tile" className='ss-image-container' style={{ width: '80%', marginLeft:'rem', marginTop:'4rem', marginBottom:'4rem' }} />
            <p>Check out our design on <a href="https://www.figma.com/design/c9LaWuythcQqkcbgu8RfcS/nom---Design-Documents?node-id=0-1&t=GlWHeZPkDcnHuVu6-1" target="_blank" rel="noopener noreferrer" style={{ textDecoration:'none', color:'#317aff'}}>Figma</a> !</p>
          </div>
        </div>

        <div className='project-sub-content-container'>
          <h4>2. Technical building</h4>
          <div>
            <p className='project-solution-text'>
                I helped with the front-end implementation for the onboarding screens and maps integration, while the other engineers cooked the backend. 
            </p><br/>
            <p className='project-solution-text'>
                We made nom as a Progressive Web App (PWA) that was built with NextJS and React on the front end, and Express and Firebase on the back end. We leveraged multiple APIs, including Google Maps and Google Places in order to provide the best recommendations for users. Then, we automated the restaurant reservation booking process by using bland.ai.
            </p>

            <img src={NomIdeas} alt="Nom Ideas" className='ss-image-container' style={{ width: '90%', marginTop: '4rem' }} />
            <img src={NomHifi} alt="Nom HiFi" className='ss-image-container' style={{ width: '90%', marginTop: '4rem' }} />
          </div>
        </div>
      </div>

      <div className="project-final-thoughts">
          <div className="project-final-box">
            <h3 className="project-gradient-text">What's Next?</h3>
            <div>
              <ol>
                <li>
                  <strong>Deeper Personalization</strong>: ate more local restaurants and cuisines to enhance recommendations.
                </li>
                <li>
                  <strong>Group Payment Integration</strong>: Splitting the bill can be another source of friction with group outings.  nom could scan the receipt and integrate with payment apps, allowing users to split the bill easily.
                </li>
                <li>
                  <strong>Restaurant Partnerships</strong>: nom could partner with restaurants for exclusive deals or priority reservations through the app.
                </li>
             </ol>
            </div>
          </div>
        </div>
    </div>
  );
}
