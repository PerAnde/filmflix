import React from 'react'
import { Link } from 'react-router-dom';

import '../PageFilmePrincipal/PageFilmePrincipal.css'

// Icones
import { PiPlayFill } from "react-icons/pi";
import { PiCheckBold } from "react-icons/pi";
import { PiSparkle } from "react-icons/pi";

import { CardSkeletonDetalhesFilmes } from '../CardsSkeleton/CardSkeletonDetalhesFilmes/CardSkeletonDetalhesFilmes';

export const PageFilmeDetalhes = ({ key_id, title, overview, vote_average, release_date, genres, backdrop_path, salvarFilme, jaEstaSalvo, loading }) => {
    return (
        <>
            <div className="container">

                {
                    loading ? (
                        <div className="descricao-filme-principal">
                            <CardSkeletonDetalhesFilmes />
                        </div>
                    ) : (
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

                            <div className="generos-filme">
                                <p><u>{genres}</u></p>
                            </div>

                            <div className="box-btn-mais-infos">
                                <Link to={`https://youtube.com/results?search_query=trailer+${title}`} target='blank' className='btn-padrao'><PiPlayFill className='icon' /> Assistir trailer</Link>

                                {jaEstaSalvo ?

                                    <Link to={'#'} className='btn-padrao-favoritar adicionado'><span></span><PiCheckBold className='icon-favoritar' /> Adicionado</Link>
                                    :
                                    <Link to={'/favoritos'} className='btn-padrao-favoritar' onClick={salvarFilme}><span></span><PiSparkle className='icon-favoritar' /> Adicionar</Link>

                                }

                            </div>

                        </div >
                    )
                }

            </div >

            <div className="fundo-degrade-esquerda"></div>
            <div className="fundo-degrade-baixo"></div>

            {
                loading ? (
                    <div className='background-filme-principal'></div>
                ) : (
                    <div className='background-filme-principal'>
                        <div className="img-filme-principal">
                            <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
                        </div>
                    </div>
                )
            }

        </>
    )
}
