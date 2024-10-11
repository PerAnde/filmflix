import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../../services/api'

import './Home.css'

// Icones
import { PiInfoBold } from "react-icons/pi";
import { PiCheckCircleFill } from "react-icons/pi";

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

            setTopFilmes(responseTop1.data.results.slice(3, 4))

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
        }

        loadFilmes();

    }, []);

    return (
        <div className="box-home">

            <div className="container">
                <div className="conteudo-filme-principal">
                    {topFilme.map((filme) => {
                        return (
                            <div className="descricao-filme-principal" key={filme.id}>

                                <h1 className='nome-filme-principal'>{filme.title}</h1>

                                <div className="sinopse-filme">
                                    <p>{filme.overview}</p>
                                </div>

                                <div className="infos-filme">
                                    <p>Nota: {filme.vote_average}</p>
                                    <p>|</p>
                                    <p>{filme.release_date.slice(0, 4)}</p>
                                </div>

                                <div className="box-btn-mais-infos">
                                    <Link to={`/filme/${filme.id}`} className='btn-padrao'><PiInfoBold /> Mais informações</Link>
                                </div>

                                <p className='principal-lancamento'><span><PiCheckCircleFill /></span>Filme em alta</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="fundo-degrade-esquerda"></div>
            <div className="fundo-degrade-baixo"></div>
            <div className='background-filme-principal'>
                {topFilme.map((filme) => {
                    return (
                        <div className="img-filme-principal" key={filme.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
                        </div>
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
                                <div className="box-filme">
                                    <div className="box-mais-infos-card">
                                        <div className="mais-infos-card">
                                            <h2>{filme.title}</h2>
                                            <Link to={`/filme/${filme.id}`} className='btn-padrao btn-card'><PiInfoBold /> Mais informações</Link>
                                        </div>
                                    </div>
                                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" />
                                </div>
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
                                <div className="box-filme">
                                    <div className="box-mais-infos-card">
                                        <div className="mais-infos-card">
                                            <h2>{filme.title}</h2>
                                            <Link to={`/filme/${filme.id}`} className='btn-padrao btn-card'><PiInfoBold /> Mais informações</Link>
                                        </div>
                                    </div>
                                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" />
                                </div>
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
                                <div className="box-filme">
                                    <div className="box-mais-infos-card">
                                        <div className="mais-infos-card">
                                            <h2>{filme.title}</h2>
                                            <Link to={`/filme/${filme.id}`} className='btn-padrao btn-card'><PiInfoBold /> Mais informações</Link>
                                        </div>
                                    </div>
                                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" />
                                </div>
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
                                <div className="box-filme">
                                    <div className="box-mais-infos-card">
                                        <div className="mais-infos-card">
                                            <h2>{filme.title}</h2>
                                            <Link to={`/filme/${filme.id}`} className='btn-padrao btn-card'><PiInfoBold /> Mais informações</Link>
                                        </div>
                                    </div>
                                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}
