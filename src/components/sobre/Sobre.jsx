import './Sobre.css';

import { useEffect, useRef } from 'react';

// Icons
import {
    IconBrain,
    IconCode,
    IconBrandReact,
    IconBolt,
    IconArrowRight
} from '@tabler/icons-react';

const Sobre = () => {
    const sobreRef = useRef(null);

    useEffect(() => {
        const section = sobreRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add('sobre-visible');
                    observer.unobserve(section);
                }
            },
            {
                threshold: 0.2
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sobreRef} className="sobre-content">

            <div className="about-container">

                {/* Informações sobre mim */}
                <div className="sobre-info">

                    <h2>Sobre mim</h2>

                    <h1>
                        Quem Sou <span>eu?</span>
                    </h1>

                    <p>
                        Sou um estudante do desenvolvimento web, com foco
                        em Front-End. Tenho 18 anos e atualmente estou no 2º ano
                        do ensino médio. Comecei a programar em março de 2026
                        e desde então venho evoluindo através de projetos práticos,
                        estudos e muita curiosidade.
                    </p>

                    <button>
                        Saiba mais sobre mim
                        <IconArrowRight />
                    </button>

                </div>

                {/* Habilidades */}
                <div className="sobre-habilidades">

                    <div className="habilidade-box">

                        <div className="habilidade-info">
                            <div className="info-icon">
                                <IconBrain stroke={1.5} />
                            </div>

                            <div className="info-text">
                                <h3>Resolução de problemas</h3>
                                <p>
                                    Gosto de entender os problemas e
                                    <br />
                                    buscar soluções simples e eficientes.
                                </p>
                            </div>
                        </div>

                        <div className="habilidade-info">
                            <div className="info-icon">
                                <IconCode stroke={1.5} />
                            </div>

                            <div className="info-text">
                                <h3>Desenvolvimento Front-End</h3>
                                <p>
                                    Desenvolvimento de interfaces
                                    <br />
                                    modernas e responsivas.
                                </p>
                            </div>
                        </div>

                        <div className="habilidade-info">
                            <div className="info-icon">
                                <IconBrandReact stroke={1.5} />
                            </div>

                            <div className="info-text">
                                <h3>React</h3>
                                <p>
                                    Criação de aplicações utilizando
                                    <br />
                                    componentes, Context e Hooks.
                                </p>
                            </div>
                        </div>

                        <div className="habilidade-info">
                            <div className="info-icon">
                                <IconBolt stroke={1.5} />
                            </div>

                            <div className="info-text">
                                <h3>Aprendizado contínuo</h3>
                                <p>
                                    Sempre buscando aprender novas
                                    <br />
                                    tecnologias e melhorar minhas habilidades.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Sobre;