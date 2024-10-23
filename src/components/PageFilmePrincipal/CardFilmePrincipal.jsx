import React from 'react'
import { Link } from 'react-router-dom';

import './PageFilmePrincipal.css'

// Icones
import { PiInfoBold } from "react-icons/pi";
import { PiCheckCircleFill } from "react-icons/pi";

export const PageFilmePrincipal = ({ key_id, title, overview, vote_average, release_date, link_id, backdrop_path }) => {
    return (
        <>
            <div className="container">

                <div className="descricao-filme-principal" key={key_id}>

                    <h1 className='nome-filme-principal'>{title}</h1>

                    <div className="sinopse-filme">
                        <p>{overview}</p>
                    </div>

                    <div className="infos-filme">
                        <p>Nota: {vote_average}</p>
                        <p>|</p>
                        <p>{release_date}</p>
                    </div>

                    <div className="box-btn-mais-infos">
                        <Link to={`/filme/${link_id}`} className='btn-padrao'><PiInfoBold className='icon' /> Mais informações</Link>
                    </div>

                    <p className='principal-lancamento'><span><PiCheckCircleFill /></span>Filme em alta</p>

                </div>

            </div>

            <div className="fundo-degrade-esquerda"></div>
            <div className="fundo-degrade-baixo"></div>

            <div className='background-filme-principal'>
                <div className="img-filme-principal">
                    <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
                </div>
            </div>
        </>
    )
}