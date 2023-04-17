import React from "react";
import TeamMember from "./LandingTeamMember";
import team1 from "./assets/team1.jpeg";
import team2 from "./assets/team2.jpeg";
import team3 from "./assets/team3.jpeg";
import team4 from "./assets/team4.jpeg";

const member = [
  { name: "Kyle", role: "Co-developer", img: team3 },
  { name: "Steven", role: "Co-developer", img: team1 },
  { name: "Spencer", role: "Co-developer", img: team2 },
  { name: "P.J.", role: "Co-developer", img: team4 },
];

const LandingTeam = (props) => (
  <div>
    <div className="centered-container">
      <span id="landingteam-header">Our Team</span>
    </div>
    <div className="flexible-hr">
      <hr id="landingteam-hr" />
    </div>
    <div className="team-container">
      {/* {teamMembers.map((member) => (
      <TeamMember key={member.name} member={member} />
    ))} */}
      <TeamMember key={member[0].name} member={member[0]}></TeamMember>
      <TeamMember key={member[1].name} member={member[1]}></TeamMember>
    </div>
    <div className="team-container">
      <TeamMember key={member[2].name} member={member[2]}></TeamMember>
      <TeamMember key={member[3].name} member={member[3]}></TeamMember>
    </div>
  </div>
);

export default LandingTeam;
