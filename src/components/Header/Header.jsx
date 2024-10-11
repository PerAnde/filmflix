import React from 'react'

import './Header.css'

import { Link } from 'react-router-dom'

// Icones
import { PiStarBold } from "react-icons/pi";

export const Header = () => {
    return (
        <header>

            <nav className='navbar'>
                <div className="nav">
                    <div className='menu-esquerdo'>
                        <Link to="/" className='logo'><span>Film</span>Flix</Link>
                        <Link to="/" className='btn-menu'>Início</Link>
                        <Link to="/" className='btn-menu'>Filmes</Link>
                        <Link to="/" className='btn-menu'>Séries</Link>
                    </div>
                    <Link to="/favoritos" className='btn-menu btn-menu-favoritos'><PiStarBold className='icon'/> Filmes Favoritos</Link>
                </div>
            </nav>

        </header>
    )
}
