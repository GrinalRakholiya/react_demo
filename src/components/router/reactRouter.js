import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import About from './About';
import PageNotFound from './pageNotFound';

function Routing() {
    return (
        <>       
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </>
    );
}

export default Routing;