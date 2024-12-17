import React from "react";
import Timer from "./componnets/Timer";
import Header from "./componnets/Header";
import { Route, Routes } from "react-router-dom";
import Magazine from "../src/componnets/Magazine";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route index element={<Timer></Timer>}></Route>
                <Route path="magazine" element={<Magazine></Magazine>}></Route>
            </Routes>
        </div>
    );
}

export default App;
