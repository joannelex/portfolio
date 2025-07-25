import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './SaveSimpleProject.css';

import SaveSimplyHero from '../assets/images/ss/savesimply-hero.png'; 
import ChatBubble from '../assets/images/ss/saveSimply-chat-bubbles.png';
import DesignIcon from '../assets/images/ss/designIcon.png';
import PMIcon from '../assets/images/ss/pmIcon.png';
import Ideas from '../assets/images/ss/saveSimple-process-ideas.png';
import UserStory from '../assets/images/ss/ss-user-story.png';
import Lofi from '../assets/images/ss/ss-lofi.png';
import ChatHifi from '../assets/images/ss/ss-hifi-chat.png';
import AnalyticsHifi from '../assets/images/ss/ss-hifi-analytics.png';
import HoverButton from '../assets/images/ss/ss-hover-button.png';
import SavingHeader from '../assets/images/ss/ss-saving-header.png';
import SavingAi from '../assets/images/ss/ss-saving-ai.png';
import SavingBudget from '../assets/images/ss/ss-saving-budget.png';
import SavingGoals from '../assets/images/ss/ss-saving-goals.png';
import SavingAiDc from '../assets/images/ss/ss-saving-ai-dc.png';
import SavingBudgetDc from '../assets/images/ss/ss-saving-budget-dc.png';
import SavingGoalsDc from '../assets/images/ss/ss-saving-goals-dc.png';
import Spending from '../assets/images/ss/ss-hifi-spending.png';
import Notif from '../assets/images/ss/ss-hifi-notif.png';

export default function SaveSimplyProject() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);

  const togglePanel = (panel) => {
    setExpanded(expanded === panel ? null : panel);
  };

  const [savingHovered, setSavingHovered] = useState('header');

  const savingDescriptions = {
    ai: (
      <div className='ss-saving-ui-description'>
        <h4>AI-recommended budgeting plan banner</h4>
        <p>This banner captures the AI-recommended a budgeting plan based on the user’s financial goals and 
          spending insights. Users are able to easily adopt this plan after a quick review.
        </p>
        <div className='ss-project-saving-design-consideration'>
          <p style={{ fontWeight:'400' }}>Design Considerations</p>
        </div>
        <img src={SavingAiDc} alt="AI Design Considerations" className='ss-saving-ui-dc-image' />
      </div>
    ),
    budget: (
      <div className='ss-saving-ui-description'>
        <h4>Spending limit banner</h4>
        <p>
          After accepting or customizing a plan, users can manage their spending caps through this editable interface.
        </p>
        <div className='ss-project-saving-design-consideration'>
          <p style={{ fontWeight:'400' }}>Design Considerations</p>
        </div>
        <img src={SavingBudgetDc} alt="Saving limits" className='ss-saving-ui-dc-image' />
      </div>
    ),
    goals: (
      <div className='ss-saving-ui-description'>
        <h4>Saving goals tiles</h4>
        <p>
          This section offers users a centralized view of all their active goals — both AI-generated and manually added.
        </p>
        <div className='ss-project-saving-design-consideration'>
          <p style={{ fontWeight:'400' }}>Design Considerations</p>
          <p>We wanted the status of each goal to recognizable at a glance. This allows users to stay engaged and monitor progress.</p>
        </div>
        <img src={SavingGoalsDc} alt="Saving goals" className='ss-saving-ui-dc-image' />
      </div>
    ),
  };

  return (
    <div className="project-page">
      <div className="project-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← back to projects
        </button>
      </div>

      <div className="project-hero">
        <img src={SaveSimplyHero} alt="SaveSimply Hero" />
      </div>

      <div className="project-meta">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span>Team: 3 Designers, 10 Engineers, 2 Marketing (6 interns)</span>
          <span>Role: Lead Designer, Product Owner</span>
        </div>
        <span style={{ textAlign: 'right' }}>Timeline: 3 days</span>
      </div>

      <div className="ss-project-problem">
        <h3>Problem: “I want to save, but I don’t know how”</h3>
        <div className="problem-list">
          <div style={{ color: '#FFB4D4' }}>
            <div className='project-row' style={{ alignItems: 'end', marginBottom: '14px' }}>
              <span className='problem-list-number'>01</span>
              <p><strong>Goal-setting feels abstract</strong></p>
            </div>
            <p>Vague goals rarely get translated into dollar amounts or timelines.</p>
          </div>

          <div style={{ color: '#9F98C2' }}>
            <div className='project-row' style={{ alignItems: 'end', marginBottom: '14px' }}>
              <span className='problem-list-number'>02</span>
              <p><strong>Budgeting tools aren’t personalized</strong></p>
            </div>
            <p>Most tools offer static advice that doesn’t reflect the user.</p>
          </div>

          <div style={{ color: '#5181B4' }}>
            <div className='project-row' style={{ alignItems: 'end', marginBottom: '14px' }}>
              <span className='problem-list-number'>03</span>
              <p><strong>There’s no proactive support</strong></p>
            </div>
            <p>Even the most motivated users fall off track without nudges or reminders.</p>
          </div>
        </div>
      </div>

      <div className="project-backstory">
        <h3>backstory</h3>
        <div className='project-backstory-text'>
          <p>
            That became the seed for <strong>SaveSimply</strong> — a concept I pitched during hackathon sign-ups. <strong>The response? Overwhelming.</strong>
          </p>
          <p>
            Within 24 hours, 14 employees joined the project, making it one of the largest teams in the hackathon.
            Designers, engineers, marketing specialists and PMs, all rallied around a common goal:
          </p>
          <p className="highlight">Make saving feel as intuitive and personalized as spending.</p>
          <p>
            As the originator and product owner, I was responsible for shaping the vision,
            leading the product direction, running sync-up meetings, and steering the design execution from start to finish.
          </p>
        </div>
      </div>

      <div className="project-solution-section">
        <h3 className="ss-project-gradient-text">Solution</h3>

        <div className="project-solution-body">
          <p>
            To tackle this, we want to create a personalized budgeting buddy that helps users set financial goals by <strong>converting their needs to a metric</strong> — using their in-app financial data such as saving and spending habits.
          </p>

          <img src={ChatBubble} alt="Chat Bubble" className='project-chat-bubble' />

          <p>
            By integrating this system directly into their financial application, we can take immediate, real actions — like opening a savings account or adjusting budget categories based on spending patterns. It’s realistic, personalized, and constantly evolving.
          </p>
          <p>
            It’s not just about giving advice. It’s about <strong>helping users act on it</strong> — seamlessly and consistently.
          </p>
        </div>
      </div>

      <div className="project-role-panels">
        <div className="project-role-panel" onClick={() => togglePanel('design')}>
          <p>My Design Role</p>
          <img src={DesignIcon} alt="Figma Icon" />
        </div>
        <div className="project-role-panel" onClick={() => togglePanel('pm')}>
          <p>My PM Role</p>
          <img src={PMIcon} alt="PM Icon" />
        </div>
      </div>

      {expanded === 'design' && (
        <div className="project-role-description">
          <h4>My Design Role</h4>
          <ul>
            <li>Led the <strong>entire design direction</strong>, from ideation to delivery</li>
            <li>Facilitated early design sprints with the team using Figjam</li>
            <li>Created the <strong>full Figma system</strong>, from onboarding flows to dashboard UI</li>
            <li>Defined the <strong>tone of voice</strong> for nudges, microcopy, and empty states</li>
            <li>Mentored two contributors unfamiliar with Figma — walking them through autolayout, components, and file hygiene</li>
            <li>Delivered <strong>interactive prototypes</strong> for presentation and validation</li>
          </ul>
        </div>
      )}

      {expanded === 'pm' && (
        <div className="project-role-description">
          <h4>My PM Role</h4>
          <p><strong>Vision holder:</strong> Defined the product’s "north star" and ensured alignment</p>
          <p><strong>Meeting lead:</strong> Ran daily syncs, scoped features, and tracked progress</p>
          <p><strong>Cross-functional:</strong> Worked with engineers to shape AI feasibility and MVP</p>
          <p><strong>Demo readiness:</strong> Led the storytelling and final pitch preparation</p>

          <h4>Focus Values</h4>
          <ul>
            <li><strong>The Client x3:</strong> Budgeting integrated into Wealthsimple’s ecosystem deepens user loyalty</li>
            <li><strong>Keep it Simple:</strong> Clear, real-life nudges that demystify money habits</li>
          </ul>

          <h4>Requirements</h4>
          <ol>
            <li>Users must see how budgets are generated</li>
            <li>Users must feel in control — can override suggestions</li>
            <li>Messaging must be empathetic and supportive</li>
            <li>Real-time updates and progress tracking</li>
            <li>Data security and privacy compliance</li>
            <li>Support for future features (shared goals, investing tie-ins)</li>
          </ol>

          <h4>AI Components</h4>
          <p>
            Since the theme of this hackathon was AI, it was crucial that we flush out our core AI components, and making sure that it is part of our MVP:
          </p>
          <ol>
            <li><strong>NLU:</strong> Parses free-text goals into structured targets</li>
            <li><strong>Cost Estimation:</strong> Scrapes and predicts realistic goal costs</li>
            <li><strong>Personalization Engine:</strong> Adjusts based on spending data</li>
            <li><strong>Notification Model:</strong> Tailors nudges based on user behavior</li>
          </ol>
        </div>
      )}

      <div className="project-process-section">
        <h3 className="ss-project-gradient-text project-process-title">The process</h3>
        <div className='project-sub-content-container'>
          <h4>1. Ideation</h4>
          <p className='project-solution-text'>
            We wanted to hear from the entire team! After presenting my initial vision and requirements, we hopped onto Figjam to brainstorm more ideas. Along with a Senior PM on our team, we discussed:
            <ul>
              <li>how would we describe this feature to a friend?</li>
              <li>other features we think would be cool to have</li>
            </ul>
          </p>
        </div>

        <img src={Ideas} alt="Ideas Process" className='ss-image-container' />
        <p>After flushing out our MVP, we created user stories, which our engineering team used as a north star to plan engineering priorities.</p>
        <img src={UserStory} alt="User Story Process" className='ss-image-container' />

        <div className='ss-project-lofi-container'>
          <div className='project-sub-content-container'>
            <h4>2. Lofi</h4>
            <p className='project-solution-text'>
              To align the team early and move fast, I started with low-fidelity wireframes in Figma—focusing on information architecture and core flow on our 
              MVPs, not visuals. This allowed us to validate the user journey before polishing UI and quickly run internal feedback sessions.
            </p>
          </div>
          <img src={Lofi} alt="Lofi Process" className='ss-project-lofi-image' />
        </div>

        <div className='project-sub-content-container' style={{ marginTop: '4rem'}}>
          <div>
            <h4>3. Hifi</h4>
            <h5>ChatFlow</h5>
          </div>
          <p className='project-solution-text'>
          This flow is the heart of the SaveSimply experience. We wanted this to be casual, and in a human-first way that feels natural and conversational. 
          The assistant asks one question at a time, adapting based on user responses.
          </p>
        </div>
        <img src={ChatHifi} alt="Hifi Process" className='ss-image-container' />
        <p>At the end of the flow, the user receives a savings plan based on their context, along with suggested trade-offs and time-to-goal estimates.</p>

        <div className='project-sub-content-container' style={{ marginTop: '6rem'}}>
          <h5>Analytics</h5>
          <div>
            <img src={AnalyticsHifi} alt="Analytics Hifi" className='ss-project-analytics-image' />
            <p className='project-solution-text'>
              We introduced a new icon on the top nav bar of the home(landing) page as the entry point to view your analytics. The biggest challenge here was to answer: 
              What information would users want to see, and how can we organize them as concisely, clearly and simply as possible?
            </p>
            <p className='project-solution-text' style={{ marginTop: '1rem'}}>
              We broke the information down into two clean, intuitive tabs: <strong>Saving</strong> and <strong>Spending</strong>.
            </p>
          </div>
        </div>

        <div className='project-sub-content-container' style={{ marginTop: '6rem'}}>
          <h5>Saving</h5>
          <div className='ss-savings-container'>
          <img src={SavingHeader} alt="Header" className="ss-saving-ui-image" />
          <img
            src={SavingAi}
            alt="AI Banner"
            onMouseEnter={() => setSavingHovered('ai')}
            className={`ss-saving-ui-image ${savingHovered === 'ai' ? 'active' : ''}`}
          />
          <img
            src={SavingBudget}
            alt="Budget"
            onMouseEnter={() => setSavingHovered('budget')}
            className={`ss-saving-ui-image ${savingHovered === 'budget' ? 'active' : ''}`}
          />
          <img
            src={SavingGoals}
            alt="Goals"
            onMouseEnter={() => setSavingHovered('goals')}
            className={`ss-saving-ui-image ${savingHovered === 'goals' ? 'active' : ''}`}
          />
          </div>
          <div className='ss-project-saving-hover-description'>
              <img src={HoverButton} alt="Hover Button" className='ss-project-hover-button-image' />
              <div>
                {savingDescriptions[savingHovered]}
              </div>
          </div>
        </div>

        <div className='project-sub-content-container' style={{ marginTop: '6rem'}}>
          <h5>Spending</h5>
          <img src={Spending} alt="Spending Hifi" className='ss-project-spending-image' />
          <div className='ss-project-spending-text-container'>
            <p>
              This screen focuses on helping users understand where their money is going.
            </p>
            <ul>
              <li><strong>Tabs</strong>: Users can toggle between different timeframes (1W, 1M, 6M) for granular or zoomed-out views.</li>
              <li><strong>Pie Chart Overview</strong>: A digestible breakdown of categories — color-coded and percentage-based.</li>
              <li><strong>Tracker UI</strong>: Visual progress bars let users compare real spending to suggested limits in real time.</li>
            </ul>
          </div>
        </div>

        <div className='project-sub-content-container' style={{ marginTop: '6rem'}}>
          <h5>Notifications / Alert banners</h5>
          <div className='ss-project-notif-text-container'>
            <img src={Notif} alt="Notifications Hifi" className='ss-project-notif-image' />
            <p>
              To support consistent savings habits, we designed contextual nudges that meet users where 
              they are—starting from their lock screens to their monthly analytics page.
            </p>
          </div>
        </div>

        <div className="project-final-thoughts">
          <div className="project-final-box">
            <h3 className="ss-project-gradient-text">Final thoughts</h3>
            <div>
              <p>
                This was one of the most fulfilling projects I’ve worked on—not just because of the product, but because of the people it brought together.
                I got to lead with empathy, clarity, and curiosity and bring a bold vision to life alongside 14 passionate teammates.
              </p>
              <p style={{ marginTop: `2rem` }}>
                And most importantly? We created something that made saving feel human again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
