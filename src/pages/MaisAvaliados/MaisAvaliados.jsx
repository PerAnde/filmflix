import { useState, useEffect } from 'react'

import api from '../../services/api'

import '../EmCartaz/OutrasPaginas.css'

import { CardFilme } from '../../components/CardFilme/CardFilme';

export const MaisAvaliados = () => {

    // Todos os mais votados
    const [maisVotados, setMaisVotados] = useState([]);

    // Buscando dados da API
    useEffect(() => {
        // Carregando lista de filmes
        async function loadFilmes() {

            // Buscando filmes mais avaliados
            const responseMaisAvaliados = await api.get("movie/top_rated", {
                params: {
                    api_key: "b859a783fbef6282a5a2b34ec41291c8",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setMaisVotados(responseMaisAvaliados.data.results)

        }

        loadFilmes();

    }, []);

    return (

        <div className="container">

            <div className="box-outras-paginas">

                <h1>Mais Avaliados</h1>

                <div className="box-filme-outras-paginas">
                    {maisVotados.map((filme) => {
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
