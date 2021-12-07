import { useEffect, useState } from "react";

export const usePlayerNameAPI = () => {
  const[playerName, setPlayerName] = useState();

  const getPlayerName = async () => {
    const url = "/user-name";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();
    setPlayerName(json.username);
  }

  useEffect(()=>{
    getPlayerName()
  }, [])

  return[ playerName ];
}
