import { useScoreAPI } from "../../hooks/useScoreAPI";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export const GameOver = ({ gameScore }) => {
  useScoreAPI();

  return (
    <div>
      <h1>Game Over</h1>
      <p>Your score is {gameScore}</p>
      <Button
        component={Link}
        to="/scoreboard"
        variant="contained"
        color="primary"
      >
        Continue
      </Button>
    </div>
  );
};
