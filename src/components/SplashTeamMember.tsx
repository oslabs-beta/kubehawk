import React from 'react';

const TeamMember = ({ member }) => (
  <div className="team-member">
    <img src={member.img} alt={`${member.name} - ${member.role}`} />
    <h3>{member.name}</h3>
    <p>{member.role}</p>
  </div>
);

export default TeamMember;