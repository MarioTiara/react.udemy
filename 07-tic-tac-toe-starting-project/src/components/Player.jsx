import { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playername, setPlayerName] = useState(initialName);
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange =(event)=>{
    console.log(event)
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playername}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playername}  onChange={handleChange}/>;
    btnCaption = "Save";
  }

  return (
    <li className={isActive? 'active' :undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
};

export default Player;
