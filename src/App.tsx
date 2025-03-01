import { useEffect, useState } from "react";
import Button from "./components/button";
import Separator from "./components/separator";
import TimerItem from "./components/timer-item";

function App() {
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let [isRunning, setIsRunning] = useState(false);
  let [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 59));

        // minutes
        setMinutes((prevMinutes) => {
          if (seconds === 0) {
            return prevMinutes > 0 ? prevMinutes - 1 : 59;
          }

          return prevMinutes;
        });

        // hours
        setHours((prevHours) => {
          if (prevHours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timer);
            setIsRunning(false);
            return 0;
          }

          return minutes > 0 && prevHours > 0 ? prevHours - 1 : prevHours;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, hours, minutes, seconds]);

  const startTimer = (): void => {
    setIsRunning(true);
  };

  const stopTimer = (): void => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const resetTimer = (): void => {
    setHours(2);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
    setIsPaused(false);
  };

  let timerStatusClass = "bg-red-300";

  if (isPaused) {
    timerStatusClass = "bg-yellow-300";
  }

  if (isRunning) {
    timerStatusClass = "bg-green-300";
  }

  return (
    <div
      className={`${timerStatusClass} flex flex-col items-center justify-center h-screen`}
    >
      <h1 className="text-indigo-400 uppercase text-3xl font-bold mb-5">
        focus time
      </h1>

      <div className="flex justify-center items-center text-black space-x-4">
        <TimerItem value={hours} />
        <Separator />
        <TimerItem value={minutes} />
        <Separator />
        <TimerItem value={seconds} />
      </div>

      <div className="mt-5 flex justify-center items-center space-x-3">
        <Button label="start" onClick={startTimer} variant="success" />
        <Button label="stop" onClick={stopTimer} variant="warning" />
        <Button label="reset" onClick={resetTimer} variant="danger" />
      </div>
    </div>
  );
}

export default App;
