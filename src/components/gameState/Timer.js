import { useEffect, useState } from "react";

export const Timer = ({setActive}) => {

  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds > 0) {
      setActive(true)
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else if (seconds === 0) {
      setSeconds('MONSTER ATTACKS YOU')
      setActive(false)
      setTimeout(() => {setSeconds(Math.floor(Math.random()*3))}, 1000) 
    }
  },[seconds, setActive]);

  return (
    <>
    </>
  )
}