import React, {useState, useEffect} from 'react';
import { format, subSeconds, endOfDay } from 'date-fns';
import matrix_styles from './matrix.module.css';

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
    <div className={matrix_styles.wrapper}>
        <h1 className={matrix_styles.numb}>{format(clock, 'HH:mm:ss')}</h1>
        <div className={matrix_styles.btnWrapper}>
          <button className={matrix_styles.btn} onClick={() => setIsRun(!isRun)}>
                                  {isRun ? 'Stop':'Start'}</button>
          <button className={matrix_styles.btn} onClick={() => {setClock(endOfDay(new Date()));
                                  setIsRun(false)}}>Reset</button>
        </div>
    </div>
)

}

