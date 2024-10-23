import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import api from '../../services/api'

import './Filme.css'

import { PageFilmeDetalhes } from '../../components/PageFilmeDetalhes/PageFilmeDetalhes'
import { CardFilmeDetalhes } from '../../components/CardFilmeDetalhes/CardFilmeDetalhes'

export const Filme = () => {

    const { id } = useParams();

    const navigate = useNavigate()

    const [filme, setFilme] = useState({})
    const [jaEstaSalvo, setJaEstaSalvo] = useState(false)

    useEffect(() => {

        async function loadFilme() {

            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "b859a783fbef6282a5a2b34ec41291c8",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilme(response.data)
                })
                .catch(() => {
                    navigate("/", { replace: true })
                    return
                })

        }

        loadFilme();

    }, [navigate, id])

    // Função para verificar se o filme já está salvo
    useEffect(() => {
        const minhaLista = localStorage.getItem("@filmflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const filmeJaSalvo = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        setJaEstaSalvo(filmeJaSalvo); // Atualiza o estado com a informação

    }, [filme.id]); // Executa a verificação sempre que o filme.id mudar

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@filmflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const filmeJaSalvo = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        setJaEstaSalvo(filmeJaSalvo)

        if (filmeJaSalvo) {
            alert("Filmne ja está na lista!")
            return;
        }

        filmesSalvos.push(filme);

        localStorage.setItem("@filmflix", JSON.stringify(filmesSalvos));

        alert("Filme salvo com sucesso!")

    }

    return (
        <div className="box-home">

            <div className="conteudo-filme-principal">
                <PageFilmeDetalhes
                    key={filme.id}
                    title={filme.title}
                    overview={filme.overview}
                    vote_average={filme.vote_average}
                    release_date={filme.release_date ? new Date(filme.release_date).toLocaleDateString('pt-BR') : 'Indisponível'}
                    link_id={filme.id}
                    backdrop_path={filme.backdrop_path}
                    genres={filme.genres ? filme.genres.map(genre => genre.name).join(" • ") : ""}
                    salvarFilme={salvarFilme}
                    jaEstaSalvo={jaEstaSalvo}
                />
            </div>

            <div className="box-detalhes-filme">
                <div className="container">

                    <div className="header-section">
                        <h3>Detalhes do filme</h3>
                    </div>

                    <CardFilmeDetalhes
                        title={filme.title}
                        budget={filme.budget !== undefined ? filme.budget.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'Indisponível'}
                        revenue={filme.revenue !== undefined ? filme.revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'Indisponível'}
                        runtime={filme.runtime}
                        origin_country={filme.origin_country}
                        vote_count={filme.vote_count}
                    />

                </div>

            </div>
        </div>
    )
}
