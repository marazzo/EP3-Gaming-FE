import { useScoreboardAPI } from "../../hooks/useScoreboardAPI";
import Score from "./Score";
import Button from "@material-ui/core/Button";
import { useNavigate } from 'react-router-dom';


export const Scoreboard = () => {
  const topTen = useScoreboardAPI();
  let history = useNavigate();
  const redirect = () => {
    history.push('/game')
  }
  return (
    <>
      <h1>High Scores</h1>
      {topTen.map((scoreData) => (
        <Score key={scoreData._id} userName={scoreData.user} score={scoreData.score} />
      ))}
      <Button onClick={redirect} variant="contained" color="primary">Play</Button>
      <Button variant="contained" color="primary">Logout</Button>
    </>
  );
};
