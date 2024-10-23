import { useEffect, useState } from 'react'

import './Favoritos.css'

import { CardFilmeFavorito } from '../../components/CardFilmeFavorito/CardFilmeFavorito'

export const Favoritos = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhaLista = localStorage.getItem("@filmflix");
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);

        localStorage.setItem("@filmflix", JSON.stringify(filtroFilmes));
    }

    return (

        <div className="container">

            <div className="box-filmes-favoritos">

                <div className="box-titulo-pagina-filmes-favoritos">
                    <h1>Favoritos</h1>
                    <p>Total de filmes: {filmes.length}</p>
                </div>


                {filmes.length === 0 && <span>Nenhum filme salvo como favorito!</span>}

                <div className="filmes-favoritos">
                    {filmes.map((item) => {
                        return (
                            <CardFilmeFavorito
                                key={item.id}
                                title={item.title}
                                backdrop_path={item.backdrop_path}
                                id={item.id}
                                excluirFilme={excluirFilme}
                            />
                        )
                    })}
                </div>

            </div>

        </div>

    )
}
