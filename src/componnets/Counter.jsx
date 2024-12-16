import React, { useContext } from "react";
import { CounterContext } from "../App";

function Counter() {
    const { counter, setCounter } = useContext(CounterContext);

    return (
        <div>
            <h1>{counter}</h1>
            <button
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Plus
            </button>
        </div>
    );
}

export default Counter;
