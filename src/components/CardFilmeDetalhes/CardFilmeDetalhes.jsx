import React from 'react'

import './CardFilmeDetalhes.css'

import { CardSkeletonLinha } from '../CardsSkeleton/CardSkeletonLinha/CardSkeletonLinha';

import { PiFilmReel } from "react-icons/pi";
import { PiCurrencyDollar } from "react-icons/pi";
import { PiClockCountdown } from "react-icons/pi";
import { PiGlobeHemisphereWest } from "react-icons/pi";
import { PiHeart } from "react-icons/pi";

export const CardFilmeDetalhes = ({ title, budget, revenue, runtime, origin_country, vote_count, loading }) => {
    return (

        <div className="detalhes-filme">

            <div className='detalhe detalhe-01'>
                <PiFilmReel className='icon-detalhe' />
                <div className="box-titulo-filme">
                    <p>Título Original:</p>
                    {
                        loading ? (
                            <CardSkeletonLinha />
                        ) : (
                            <span>{title}</span>
                        )
                    }
                </div>
            </div>

            <div className='detalhe detalhe-02'>
                <PiCurrencyDollar className='icon-detalhe' />
                <div className="box-titulo-filme">
                    <p>Orçamento:</p>
                    {
                        loading ? (
                            <CardSkeletonLinha />
                        ) : (
                            <span>{budget}</span>
                        )}
                </div>
            </div>

            <div className='detalhe detalhe-03'>
                <PiCurrencyDollar className='icon-detalhe' />
                <div className="box-titulo-filme">
                    <p>Receita atual:</p>
                    {
                        loading ? (
                            <CardSkeletonLinha />
                        ) : (
                            <span>{revenue}</span>
                        )}
                </div>
            </div>

            <div className='detalhe detalhe-04'>
                <PiClockCountdown className='icon-detalhe' />
                <div className="box-titulo-filme">
                    <p>Duração:</p>
                    {
                        loading ? (
                            <CardSkeletonLinha />
                        ) : (
                            <span>{runtime} min</span>
                        )}
                </div>
            </div>

            <div className='detalhe detalhe-05'>
                <PiGlobeHemisphereWest className='icon-detalhe' />
                <div className="box-titulo-filme">
                    <p>País de Origem:</p>
                    {
                        loading ? (
                            <CardSkeletonLinha />
                        ) : (
                            <span>{origin_country}</span>
                        )}
                </div>
            </div>

            <div className='detalhe detalhe-06'>
                <PiHeart className='icon-detalhe' />
                <div className="box-titulo-filme">
                    <p>Total de Votos:</p>
                    {
                        loading ? (
                            <CardSkeletonLinha />
                        ) : (
                            <span>{vote_count}</span>
                        )}
                </div>
            </div>

        </div >
    )
}