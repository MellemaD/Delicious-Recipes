import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import {Route, Routes, useLocation} from 'react-router-dom';
import Searched from "./Searched";
import Recipe from "./Recipe";
import {AnimatePresence} from "framer-motion";



function Pages() {
    const location = useLocation();
    return (
        // Explanation for animatepresence and location in Home.js
        <AnimatePresence>
            {/*  <BrowserRouter> Gives ability for other routes to work */}
            <Routes location={location} key={location.pathname}> {/* is intelligent component that looks at the paths and figures out which to render */}
                <Route path="/" element={<Home/>} />
                <Route path="/cuisine/:type" element={<Cuisine/>} />
                <Route path="/searched/:search" element={<Searched/>} />
                <Route path="/recipe/:name" element={<Recipe/>} />
            </Routes>
        </AnimatePresence>
        /*/ Move to app </BrowserRouter>/*/
    )
}

export default Pages