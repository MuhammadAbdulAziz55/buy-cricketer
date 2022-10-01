import React from "react";
import "./Players.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Players = (props) => {
  const { name, salary, img, battingStyle, currentTeam } = props.player;
  const handlePlayer = props.handlePlayer;
  // const onAdd = props.onAdd;
  return (
    <div className="player-details">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="player-text-info">
        <h2>Name: {name}</h2>
        <p>Batting-Style: {battingStyle}</p>
        <p>Current-Team: {currentTeam}</p>
        <p>Salary: ${salary}</p>
        <button
          onClick={() => props.handlePlayer(props.player)}
          className="btn btn-success"
        >
          <FontAwesomeIcon icon={faUserPlus} />
          Buy Player
        </button>
      </div>
    </div>
  );
};

export default Players;
