import './App.css'

import { Header } from './components/Header/Header'
import RoutesApp from './routes/routes'
import { Footer } from './components/Footer/Footer'

function App() {

    return (
        <div className='app'>
            <Header />
            <RoutesApp />
            <Footer />
        </div>
    )

}

export default App
