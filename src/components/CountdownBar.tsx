import { useEffect, useState } from "react";

type CountdownBarProps = {
  lastFed: string;
  duration?: number; // optional, default = 60 seconds
};

const CountdownBar = ({ lastFed, duration = 60 }: CountdownBarProps) => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const secondsSinceFed = (now - new Date(lastFed).getTime()) / 1000;

  const getProgress = () => {
    const percentage = Math.max(0, 100 - (secondsSinceFed / duration) * 100);
    return Math.min(100, percentage);
  };

  const getBarColor = () => {
    if (secondsSinceFed > duration * 0.83) return "#ff4d4d"; // red
    if (secondsSinceFed > duration / 2) return "#ffa726"; // orange
    return "#36e61c"; // green
  };

  return (
    <div className="w-full h-2 bg-gray-200 rounded mt-4 overflow-hidden">
      <div
        style={{
          width:`${getProgress()}%`,
          height: "100%",
          backgroundColor: getBarColor(),
          transition: "width 0.25s linear, background-color 0.25s linear",
        }}
      />
    </div>
  );
};

export default CountdownBar;
