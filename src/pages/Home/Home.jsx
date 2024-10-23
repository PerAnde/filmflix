import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../../services/api'

import './Home.css'

import { CardFilme } from '../../components/CardFilme/CardFilme';
import { PageFilmePrincipal } from '../../components/PageFilmePrincipal/CardFilmePrincipal';

export const Home = () => {

    // Top Filme
    const [topFilme, setTopFilmes] = useState([]);
    // Todos os filmes em alta
    const [filmesEmCartaz, setFilmesEmCartaz] = useState([]);
    // Todos os filmes populares
    const [filmePopulares, setFilmesPopulares] = useState([]);
    // Todos os mais votados
    const [maisVotados, setMaisVotados] = useState([]);
    // Todos os que ainda vao ser lancados
    const [preLancamento, setPreLancamento] = useState([]);

    // Loading...
    const [loading, setLoading] = useState(true);

    // Buscando dados da API
    useEffect(() => {
        // Carregando lista de filmes
        async function loadFilmes() {
            // Const response recebe basicamente isso movie/now_playing?api_key=b859a783fbef6282a5a2b34ec41291c8&language=pt-BR&page=1
            const responseTop1 = await api.get("movie/now_playing", {
                params: {
                    api_key: "b859a783fbef6282a5a2b34ec41291c8",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setTopFilmes(responseTop1.data.results.slice(0, 1))

            // Buscando filmes em cartaz
            const responseEmCartaz = await api.get("movie/now_playing", {
                params: {
                    api_key: "b859a783fbef6282a5a2b34ec41291c8",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilmesEmCartaz(responseEmCartaz.data.results.slice(1, 7))

            // Buscando filmes populares
            const responsePopular = await api.get("movie/popular", {
                params: {
                    api_key: "b859a783fbef6282a5a2b34ec41291c8",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilmesPopulares(responsePopular.data.results.slice(1, 7))

            // Buscando filmes que ainda vao lancar
            const responseEstreia = await api.get("movie/upcoming", {
                params: {
                    api_key: "b859a783fbef6282a5a2b34ec41291c8",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setPreLancamento(responseEstreia.data.results.slice(1, 7))

            // Buscando filmes mais avaliados
            const responseMaisAvaliados = await api.get("movie/top_rated", {
                params: {
                    api_key: "b859a783fbef6282a5a2b34ec41291c8",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setMaisVotados(responseMaisAvaliados.data.results.slice(1, 7))
            // setLoading(false)
        }

        loadFilmes();

    }, []);

    return (
        <div className="box-home">

            <div className="conteudo-filme-principal">
                {topFilme.map((filme) => {
                    return (
                        <PageFilmePrincipal
                            key={filme.id}
                            title={filme.title}
                            overview={filme.overview}
                            vote_average={filme.vote_average}
                            release_date={filme.release_date}
                            link_id={filme.id}
                            backdrop_path={filme.backdrop_path}
                        />
                    )
                })}
            </div>

            <div className="box-outros-filmes">
                <div className="container">

                    <div className="header-section">
                        <h3>Em cartaz</h3>
                        <Link><u>Ver tudo</u></Link>
                    </div>

                    <div className="outros-filmes">
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

                <div className="container">

                    <div className="header-section">
                        <h3>Populares</h3>
                        <Link><u>Ver tudo</u></Link>
                    </div>

                    <div className="outros-filmes">
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

                <div className="container">

                    <div className="header-section">
                        <h3>Próximos Estreias</h3>
                        <Link><u>Ver tudo</u></Link>
                    </div>

                    <div className="outros-filmes">
                        {preLancamento.map((filme) => {
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

                <div className="container">

                    <div className="header-section">
                        <h3>Mais avaliados</h3>
                        <Link><u>Ver tudo</u></Link>
                    </div>


                    <div className="outros-filmes">
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

        </div>
    )
}
