import React from "react";
import './Player.css';

const Player = (props) => {

  const {player} = props

  return <li className='player'>
            <span>{player}</span>
          </li>
};

export default Player;
