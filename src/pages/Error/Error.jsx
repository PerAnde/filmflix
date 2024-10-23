import React from 'react'
import { Link } from 'react-router-dom';

import img404 from '../../../img/img404.png'

import './Error.css'

export const Error = () => {
    return (
        <div className="container">
            <div className="box-pagina-404">
                <div className="box-img-404">
                    <img src={img404} alt="" />
                </div>
                <span>Ops... não encontramos nada aqui!</span>
                <Link to={"/"} className='btn-padrao'>Voltar para o início</Link>
            </div>
        </div>
    )
}
