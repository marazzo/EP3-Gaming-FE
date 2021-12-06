import { useEffect } from "react";

export const useScoreAPI = () => {

  const sendScore = async () => {
    const url = "/commit-score";
    const res = await fetch(url, { method: "GET" });

  };

  useEffect(() => sendScore(), []);
};
