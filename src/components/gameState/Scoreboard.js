import { useScoreboardAPI } from "../../hooks/useScoreboardAPI";
import Score from "./Score";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export const Scoreboard = () => {
  const topTen = useScoreboardAPI();

  return (
    <>
      <h1>High Scores</h1>
      {topTen.map((scoreData) => (
        <Score key={scoreData._id} userName={scoreData.user} score={scoreData.score} />
      ))}   

      <Link to="/game">
        <Button variant="contained" color="primary">
          Play
        </Button>
      </Link>
    
     
      <Button variant="contained" color="primary">Logout</Button>
      
    </>
  );
};
