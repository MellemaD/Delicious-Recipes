import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import { Route, Routes } from 'react-router-dom';



function Pages() {
    return (
        // <BrowserRouter> {/* Gives ability for other routes to work */}
        <Routes> {/* is intelligent component that looks at the paths and figures out which to render */}
            <Route path="/" element={<Home/>} />
            <Route path="/cuisine/:type" element={<Cuisine/>} />

        </Routes>
        // Move to app </BrowserRouter>
    )
}

export default Pages