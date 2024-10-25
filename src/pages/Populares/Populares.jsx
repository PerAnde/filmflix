import { useState, useEffect } from 'react'

import api from '../../services/api'

import '../EmCartaz/OutrasPaginas.css'

import { CardFilme } from '../../components/CardFilme/CardFilme';

export const Populares = () => {

    // Todos os filmes populares
    const [filmePopulares, setFilmesPopulares] = useState([]);

    // Buscando dados da API
    useEffect(() => {
        // Carregando lista de filmes
        async function loadFilmes() {

             // Buscando filmes populares
             const responsePopular = await api.get("movie/popular", {
                params: {
                    api_key: "b859a783fbef6282a5a2b34ec41291c8",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilmesPopulares(responsePopular.data.results.slice(1, 16))

        }

        loadFilmes();

    }, []);

    return (

        <div className="container">

            <div className="box-outras-paginas">

                <h1>Populares</h1>

                <div className="box-filme-outras-paginas">
                    {filmePopulares.map((filme) => {
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
