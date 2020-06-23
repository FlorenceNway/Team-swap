import React from "react";
import Player from './Player/Player'
import './Team.css'

const Team = (props) => {

  const {players, teamName} = props

  return  <ul className='team'> 
              <li className='title'>{teamName}</li>
              { players.map(player => <Player player={player}/>) } 
          </ul>   
};

export default Team;
