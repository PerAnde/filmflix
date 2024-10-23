import React from 'react'

import './CardFilmeDetalhes.css'

import { PiFilmReel } from "react-icons/pi";
import { PiCurrencyDollar } from "react-icons/pi";
import { PiClockCountdown } from "react-icons/pi";
import { PiGlobeHemisphereWest } from "react-icons/pi";
import { PiHeart } from "react-icons/pi";

export const CardFilmeDetalhes = ({ title, budget, revenue, runtime, origin_country, vote_count }) => {
    return (
        <div className="detalhes-filme">
            <p><PiFilmReel className='icon'/>Título Original: {title}</p>
            <p><PiCurrencyDollar className='icon'/>Orçamento: {budget}</p>
            <p><PiCurrencyDollar className='icon'/>Receita atual: {revenue}</p>
            <p><PiClockCountdown className='icon'/>Duração: {runtime} min</p>
            <p><PiGlobeHemisphereWest className='icon'/>País de Origem: {origin_country}</p>
            <p><PiHeart className='icon'/>Total de Votos: {vote_count}</p>
        </div>
    )
}
