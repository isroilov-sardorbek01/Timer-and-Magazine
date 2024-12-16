import React, { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState('');
    const [run, setRun] = useState(false);

    useEffect(() => {
        let timer;
        if (run && time > 0) {
            timer = setInterval(() => {
                setTime((t) => t - 1);
            }, 1000);
        } else if (time === 0) {
            setRun(false);
        }
        return () => clearInterval(timer);
    }, [run, time]);

    function onStart(e) {
        e.preventDefault();
        if (time > 0) {
            setRun(true);
        }
    }

    function onPause(e) {
        e.preventDefault();
        setRun(false);
    }

    function onRestart(e) {
        e.preventDefault();
        setRun(false);
        setTime('');
    }

    return (
        <div className="con1">
            <div className="container p-5 rounded-md">
                <h1 className="text-[50px] text-center mb-3 font-mono">
                    Timer
                </h1>
                <input
                    className="border-2 mb-3 rounded-md text-[20xp] p-3 w-full border-black"
                    type="number"
                    value={time}
                    onChange={(e) => setTime(Number(e.target.value))}
                    placeholder="Enter the time"
                    disabled={run} // Timer ishlayotgan paytda inputni bloklash
                />
                <div className="flex justify-center text-center centerTime">
                    <h1 className="p-3 mb-4 text-center bg-blue-400 w-[200px] rounded-md text-white text-2xl font-mono">
                        {time} seconds
                    </h1>
                </div>
                <div className="flex justify-between sameBtn">
                    <button onClick={onStart}  className="bg-blue-400 w-[100px] rounded-md text-white py-3">START</button>
                    <button onClick={onPause} className="bg-blue-400 w-[100px] rounded-md text-white">PAUSE</button>
                    <button onClick={onRestart} className="bg-blue-400 w-[100px] rounded-md text-white">RESTART</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
