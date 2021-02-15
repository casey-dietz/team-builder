import './App.css';
import teamData from './Data';
import { useState } from 'react';
import Form from './components/Form'
import Member from "./components/Member";

function App() {

  const [members, setMembers] = useState(teamData)

  return (
    <div className="App">
      <Form />
      {members.map(e => <Member key={e.id} />)}
    </div>
  );
}

export default App;
