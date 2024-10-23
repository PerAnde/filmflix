import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Filme } from '../pages/Filme/Filme';
import { Favoritos } from '../pages/Favoritos/Favoritos';
import { Error } from '../pages/Error/Error';

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element={<Filme />} />
            <Route path="/favoritos" element={<Favoritos />} />
            {/* Pagina 404 */}
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default RoutesApp;