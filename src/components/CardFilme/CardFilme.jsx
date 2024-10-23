import { Link } from 'react-router-dom';

import './CardFilme.css'

// Icones
import { PiInfoBold } from "react-icons/pi";

export const CardFilme = ({ key_id, title, link_id, poster_path }) => {
    return (
        <div className="box-filme" key={key_id}>
            <div className="box-mais-infos-card">
                <div className="mais-infos-card">
                    <h2>{title}</h2>
                    <Link to={`/filme/${link_id}`} className='btn-padrao btn-card'><PiInfoBold /> Mais informações</Link>
                </div>
            </div>
            <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
        </div>
    )
}
