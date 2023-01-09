import { useEffect, useState } from "react";

const useTimer = (initialValue) => {
  const [time, setTime] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  });

  const resetTime = () => {
    setTime(initialValue);
  };

  return [time, resetTime];
};

export default useTimer;
