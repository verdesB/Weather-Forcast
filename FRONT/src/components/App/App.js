import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home"

import './reset.scss'
import './global.scss'




const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

            </BrowserRouter>

        </>
    )
}

export default App;