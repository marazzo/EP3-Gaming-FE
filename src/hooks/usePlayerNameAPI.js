import { useState } from "react";

export const usePlayerNameAPI = () => {
  const[playerName, setPlayerName] = useState();

  const getPlayerName = () => {
    const url = "/user-name";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();

    setPlayerName(json.username);
  }
  return[playerName, getPlayerName];
}
