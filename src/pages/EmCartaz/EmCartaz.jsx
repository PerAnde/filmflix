import { useState, useEffect } from 'react'

import api from '../../services/api'

import './OutrasPaginas.css'

import { CardFilme } from '../../components/CardFilme/CardFilme';

export const EmCartaz = () => {

    // Todos os filmes em alta
    const [filmesEmCartaz, setFilmesEmCartaz] = useState([]);

    // Buscando dados da API
    useEffect(() => {
        // Carregando lista de filmes
        async function loadFilmes() {

            // Buscando filmes em cartaz
            const responseEmCartaz = await api.get("movie/now_playing", {
                params: {
                    api_key: "b859a783fbef6282a5a2b34ec41291c8",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilmesEmCartaz(responseEmCartaz.data.results)

        }

        loadFilmes();

    }, []);

    return (

        <div className="container">

            <div className="box-outras-paginas">

                <h1>Em Cartaz</h1>

                <div className="box-filme-outras-paginas">
                    {filmesEmCartaz.map((filme) => {
                        return (
                            <CardFilme
                                key={filme.id}
                                title={filme.title}
                                link_id={filme.id}
                                poster_path={filme.poster_path}
                            />
                        )
                    })}
                </div>

            </div>
        </div>

    )
}
