import { useState, useEffect } from "react";

export default function useDateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    
    return function cleanup() {
      clearInterval(timer);
    }
  }, []);

  return {
    date
  };
}
