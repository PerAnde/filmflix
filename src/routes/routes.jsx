import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Filme } from '../pages/Filme/Filme';

function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/filme/:id" element={<Filme/>}/>
        </Routes>
    )
}

export default RoutesApp;