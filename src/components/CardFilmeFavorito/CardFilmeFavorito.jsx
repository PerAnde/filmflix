import React from 'react'
import { Link } from 'react-router-dom';

import './CardFilmeFavorito.css'

import { PiInfo  } from "react-icons/pi";
import { PiTrashSimple } from "react-icons/pi";

export const CardFilmeFavorito = ({ id, title, backdrop_path, excluirFilme }) => {
    return (
        <div className='card-filme-favorito'>
            <div className="filme-favorito-img">
                <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} />
            </div>
            <div className="box-infos-filme-favorito">
                <div className="box-titulo-filme-favorito">
                    <span>Filme</span>
                    <h3>{title}</h3>
                </div>
                <div className="box-opcoes">
                    <Link to={`/filme/${id}`} className='btn-ver-detalhes-favorito'><PiInfo /> Ver detalhes</Link>
                    <Link className='btn-ver-detalhes-favorito btn-excluir' onClick={() => excluirFilme(id)}><PiTrashSimple /> Excluir</Link>
                </div>
            </div>
        </div>
    )
}
