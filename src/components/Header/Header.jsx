import React from 'react'

import './Header.css'

import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>

            <nav className='navbar'>
                <div className="nav">
                    <div className='menu-esquerdo'>
                        <Link to="/" className='logo'><span>Film</span>Flix</Link>
                        <Link to="/" className='btn-menu'>Início</Link>
                    </div>
                    <Link to="/favoritos" className='btn-menu btn-menu-favoritos'>Filmes Favoritos</Link>
                </div>
            </nav>

        </header>
    )
}
