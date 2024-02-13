import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [name, setName] = useState("");

  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button
          onClick={() => {
            setName(playerName.current.value);
            playerName.current.value = "";
          }}
        >
          Set Name
        </button>
      </p>
    </section>
  );
}
