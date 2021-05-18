import React, {useState} from 'react';
import { endOfDay } from 'date-fns';

function Start (props) {
  const  {isRun, setIsRun} = props;
    return 
    setIsRun(!isRun);
};

function Stop (props) {
    const  {isRun, setIsRun} = props;
    return 
    setIsRun(!isRun);
};

function Reset (props) {
    const {clock, setClock} = props;
    return 
        setClock(endOfDay(new Date()));
};

export {Start, Stop, Reset};