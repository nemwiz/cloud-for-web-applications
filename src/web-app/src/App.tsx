import React from 'react';
import './Home.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Norway from './destinations/Norway';
import Japan from './destinations/Japan';
import India from './destinations/India';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/norway'} element={<Norway/>}/>
            <Route path={'/japan'} element={<Japan/>}/>
            <Route path={'/india'} element={<India/>}/>
        </Routes>
    );
}

export default App;
