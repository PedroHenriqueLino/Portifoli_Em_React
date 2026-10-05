import './Projetos.css';

// icons
import {
    IconArrowRight,
    IconAlertTriangle
} from "@tabler/icons-react";

import { useEffect, useRef, useState } from 'react';

const Projetos = () => {

    const [mostrarAviso, setMostrarAviso] = useState(false);
    const projetosRef = useRef(null);

    useEffect(() => {
        const section = projetosRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add('projetos-visible');
                    observer.unobserve(section);
                }
            },
            {
                threshold: 0.15
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (

        <div ref={projetosRef} className='projetos-content'>

            <div className="projetos-title projetos-entrada">

                <h2>Projetos</h2>

                <h1>
                    Meus <span>Projetos</span>
                </h1>

                <IconAlertTriangle
                    size={50}
                    stroke={1}
                    onClick={() => setMostrarAviso(!mostrarAviso)}
                />

                <div
                    className={`aviso-produtos ${mostrarAviso ? "mostrar" : ""
                        }`}
                >
                    Algumas APIs deste projeto podem apresentar instabilidade.
                    Em alguns momentos, os dados podem não carregar na primeira tentativa.
                    Caso isso aconteça, atualize ou reabra o projeto até que os dados sejam carregados corretamente.

                    Aviso 2

                    Após a publicação do projeto, algumas funcionalidades podem apresentar
                    instabilidade ou não funcionar como esperado. Ainda estou investigando
                    a causa desses comportamentos, que não aconteciam da mesma forma durante
                    o desenvolvimento local.
                </div>

            </div>

            <div className="projects-list">

                {/* E-commerce */}
                <div className="projetos-cards projeto-card-1">

                    <div
                        className="card-img"
                        style={{
                            backgroundImage:
                                "url('/project-img/E-comerce.png')"
                        }}
                    >
                    </div>

                    <div className="projetos-info">

                        <h4>Compre já</h4>

                        <div className="projetos-tecnologia">
                            <span>React</span>
                            <span>Context</span>
                            <span>API</span>
                        </div>

                        <p>
                            E-commerce inspirado no mercado
                            Livre, com funcionalidades reais
                            e desing moderno.
                        </p>

                        <button
                            onClick={() =>
                                window.open(
                                    "https://e-commerce-alpha-five-52.vercel.app/",
                                    "_blank"
                                )
                            }
                        >
                            Ver projeto
                            <IconArrowRight />
                        </button>

                    </div>

                </div>


                {/* CRUD Produtos */}
                <div className="projetos-cards projeto-card-2">

                    <div
                        className="card-img"
                        style={{
                            backgroundImage:
                                "url('/project-img/Crud-Product.png')"
                        }}
                    >
                    </div>

                    <div className="projetos-info">

                        <h4>CRUD Produtos</h4>

                        <div className="projetos-tecnologia">
                            <span>React</span>
                            <span>JSON Serve</span>
                            <span>Context</span>
                        </div>

                        <p>
                            Sistema de gerenciamento de produtos
                            com iltros, busca, ordenação e paginação
                        </p>

                        <button
                            onClick={() =>
                                window.open(
                                    "https://crud-products-blue.vercel.app/",
                                    "_blank"
                                )
                            }
                        >
                            Ver projeto
                            <IconArrowRight />
                        </button>

                    </div>

                </div>


                {/* Filmes */}
                <div className="projetos-cards projeto-card-3">

                    <div
                        className="card-img"
                        style={{
                            backgroundImage:
                                "url('/project-img/Filmes.png')"
                        }}
                    >
                    </div>

                    <div className="projetos-info">

                        <h4>CineHub</h4>

                        <div className="projetos-tecnologia">
                            <span>React</span>
                            <span>Context</span>
                            <span>API</span>
                        </div>

                        <p>
                            Catálogo de filmes com integração
                            com a TMDB, favoritos e muito mais.
                        </p>

                        <button
                            onClick={() =>
                                window.open(
                                    "https://filmes-em-react.vercel.app/",
                                    "_blank"
                                )
                            }
                        >
                            Ver projeto
                            <IconArrowRight />
                        </button>

                    </div>

                </div>


                {/* Dashboard */}
                <div className="projetos-cards projeto-card-4">

                    <div
                        className="card-img"
                        style={{
                            backgroundImage:
                                "url('/project-img/Dashboard.png')"
                        }}
                    >
                    </div>

                    <div className="projetos-info">

                        <h4>Dashboard</h4>

                        <div className="projetos-tecnologia">
                            <span>React</span>
                            <span>Recharts</span>
                            <span>Context</span>
                        </div>

                        <p>
                            Dashboard com gráfico, tabelas e
                            indicadores de vendas, clientes e produtos.
                        </p>

                        <button
                            onClick={() =>
                                window.open(
                                    "https://dash-board-em-react.vercel.app/",
                                    "_blank"
                                )
                            }
                        >
                            Ver projeto
                            <IconArrowRight />
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Projetos;