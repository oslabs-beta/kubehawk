import React from 'react';
import TeamMember from './LandingTeamMember';
import loginImg from "./assets/login_4.png";

const teamMembers = [
  { name: 'Kyle', role: 'Co-developer', img: loginImg },
  { name: 'Steven', role: 'Co-developer', img: loginImg },
  { name: 'Spencer', role: 'Co-developer', img: loginImg },
  { name: 'P.J.', role: 'Co-developer', img: loginImg },
];

const SplashTeam = () => (
  <div className="team-container">
    {teamMembers.map((member) => (
      <TeamMember key={member.name} member={member} />
    ))}
  </div>
);

export default SplashTeam;