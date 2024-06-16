"use client"

import React, { useEffect, useRef, useState } from 'react';

const SetCounter = ({ targetValue }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const countUpRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValue((prevValue) => {
        if (prevValue >= targetValue) {
          return 0;
        }
        return prevValue + 1;
      });
    }, 1); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, [targetValue]);

  useEffect(() => {
    if (countUpRef.current) {
      countUpRef.current.innerText = currentValue;
    }
  }, [currentValue]);

  return (
      <span className='text-primary-500' ref={countUpRef}>{currentValue}</span>
  );
};

export default SetCounter;
