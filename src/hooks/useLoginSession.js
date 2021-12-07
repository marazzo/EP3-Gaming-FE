import { useEffect, useState } from "react";
import { usePlayerNameAPI } from "./usePlayerNameAPI";

export const useLoginSession = () => {
  const [isAuthenticated, setAuth] = useState(false);
  const [playerName] = usePlayerNameAPI();

  const checkAuth = () => {
    if (playerName) {
      setAuth(true);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return [isAuthenticated];
};
