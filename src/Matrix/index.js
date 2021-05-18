import React, {useState, useEffect} from 'react';
import {Start, Stop, Reset} from './functions';
import { format, subSeconds, endOfDay } from 'date-fns';

export default function Clock () {
const [clock, setClock] = useState(endOfDay(new Date())); 
const [isRun, setIsRun] = useState(false);

useEffect(() => {
    if (isRun) {
      const v = setTimeout(() => {
        setClock(subSeconds(clock, 1));
      }, 1000);
      return () => {
        clearTimeout(v);
      };
    }
  }, [isRun, clock]);

return (
    <div>
        <h1>{format(clock, 'HH:mm:ss')}</h1>
        <button onClick={Start}>Start</button>
        <button onClick={Stop}>Stop</button>
        <button onClick={Reset}>Reset</button>
    </div>
)

}