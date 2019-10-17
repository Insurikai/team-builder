import React, {useState} from 'react';
import './App.css';

import TeamMember from './components/TeamMember';
import Form from './components/Form';
import styled from 'styled-components';

const MemberContainer =styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;`;

function App() {
  const [team, setTeam] = useState([
    {
      name:"Michael Jordan",
      email:"Insurikai@gmail.com",
      role:"Front-End Dev"
    },{
      name:"Michael Jordan",
      email:"Insurikai@gmail.com",
      role:"Front-End Dev"
    },{
      name:"Michael Jordan",
      email:"Insurikai@gmail.com",
      role:"Front-End Dev"
    }]);
  const addTeamMember = member => {
    setTeam([...team, member]);
  }
  return (
    <div className="App">
      <MemberContainer>
        {team && team.map((member)=>{ return <TeamMember member={member}/> })}
      </MemberContainer>
      <div/>
      <Form addTeamMember={addTeamMember}/>
    </div>
  );
}

export default App;
