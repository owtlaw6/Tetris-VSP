import { useCallback, useEffect, useRef, useState } from "react";

export function useGameTime({ onTick: handleTick, speed }){
    const timeInterval = useRef(null);
    const [isRunning, setIsRunning] = useState(false);

    const startTime = useCallback(() => {
        if(timeInterval.current){
             return console.warn("timer already started");
        }
        timeInterval.current = setInterval(() => {
            handleTick();
        }, speed);
        setIsRunning(true);
    }, [handleTick]);

    const stopTime = useCallback(
        () => { 
            if(!timeInterval.current){
                console.warn("nothing to stop!");
            }
        clearInterval(timeInterval.current);
        timeInterval.current = null;
        setIsRunning(false);
        },[timeInterval.current]);

    useEffect(() => {
        if(!timeInterval.current) return;
        stopTime(); startTime();
    }, [startTime, stopTime, speed])

    return { isRunning, startTime, stopTime };
}