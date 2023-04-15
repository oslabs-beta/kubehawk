import React from 'react';
import TeamMember from './SplashTeamMember';
import loginImg from "./assets/login_4.png";

const teamMembers = [
  { name: 'Alice', role: 'CEO', img: loginImg },
  { name: 'Bob', role: 'CTO', img: loginImg },
  { name: 'Carol', role: 'CFO', img: loginImg },
  { name: 'Dave', role: 'CMO', img: loginImg },
];

const SplashTeam = () => (
  <div className="team-container">
    {teamMembers.map((member) => (
      <TeamMember key={member.name} member={member} />
    ))}
  </div>
);

export default SplashTeam;