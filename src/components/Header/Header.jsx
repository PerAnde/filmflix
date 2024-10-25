import React, { useEffect, useState } from 'react'

import './Header.css'

import { Link } from 'react-router-dom'

// Icones
import { PiStarBold } from "react-icons/pi";

export const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])

    return (
        <header>

            <nav className={`navbar ${scrolled ? 'active' : ''}`}>
                <div className="nav">
                    <div className='menu-esquerdo'>
                        <Link to="/" className='logo'><span>Film</span>Flix</Link>
                        <Link to="/" className='btn-menu menu-mobile'>Início</Link>
                        <Link to="/emcartaz" className='btn-menu menu-mobile'>Em Cartaz</Link>
                        <Link to="/populares" className='btn-menu menu-mobile'>Populares</Link>
                        <Link to="/maisavaliados" className='btn-menu menu-mobile'>Mais Avaliados</Link>
                    </div>
                    <Link to="/favoritos" className='btn-menu btn-menu-favoritos'><PiStarBold className='icon' /> Filmes Favoritos</Link>
                </div>
            </nav>

        </header>
    )
}
