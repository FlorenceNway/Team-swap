import React, { useState } from "react";
import "./App.css";
import Team from './components/Team/Team';


const App = () => {
  const [players, setPlayers] = useState([
    "Tom",
    "Sam",
    "Vasile",
    "Guy",
    "Ben",
    "Daniel",
    "Ed",
    "Alex",
    "Andrew",
    "Mat",
  ]);

  const [teamOne, setTeamOne] = useState([])
  const [teamTwo, setTeamTwo] = useState([]) 

  const removedSelectedPlayer = (playerName) => {
    const filterdPlayers = players.filter(player => player !== playerName)
    setPlayers(filterdPlayers)
  }

  const clickHandler = (e) => {
    const value = e.target.dataset.value
    const playerName = e.target.dataset.player
    
    if(value === "team1") {
      setTeamOne([...teamOne, playerName])
      removedSelectedPlayer(playerName)
      
    }
    else if(value === "team2") {
      setTeamTwo([...teamTwo, playerName])
      removedSelectedPlayer(playerName)
    }
  }

  
  return <div className="app">
            <ul className='players'>
                  {players.map( player => (
                    <>
                      <li className='player'>
                        <span>{player}</span>
                        <button onClick={clickHandler} data-value="team1" data-player={player}>Team 1</button>
                        <button onClick={clickHandler} data-value="team2" data-player={player}>Team 2</button>
                      </li>
                    </>
                  ))} 
            </ul>
            
            <Team players={teamOne} teamName="Team One"/>
            <Team players={teamTwo} teamName="Team Two"/>
            
        </div>;
};

export default App;
