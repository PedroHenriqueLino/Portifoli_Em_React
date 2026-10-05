import './Contato.css';

import {
    IconBrandLinkedinFilled,
    IconMail,
    IconMailFilled,
    IconBrandGithubFilled
} from '@tabler/icons-react';

import { useEffect, useRef } from 'react';

const Contato = () => {

    const contatoRef = useRef(null);

    useEffect(() => {

        const section = contatoRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {

                    section.classList.add('contato-visible');

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

        <div ref={contatoRef} className='contato-content'
            style={{
                backgroundImage: "url('/ContatoBackground.png')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >

            <div className="contato-box">

                <div className="skills">

                    <h3>SKILLS</h3>

                    <h2>
                        Tecnologias que <span>eu uso</span>
                    </h2>

                    <div className="skills-tecnologias">

                        <div className="tecnologia">
                            <img src="/tecnologia/HTML5.png" width={50} />
                            HTML
                        </div>

                        <div className="tecnologia">
                            <img src="/tecnologia/CSS3.png" width={50} />
                            CSS
                        </div>

                        <div className="tecnologia">
                            <img src="/tecnologia/JavaScript.png" width={50} />
                            JavaScript
                        </div>

                        <div className="tecnologia">
                            <img src="/tecnologia/React.png" width={50} />
                            React
                        </div>

                        <div className="tecnologia">
                            <img src="/tecnologia/Git.png" width={50} />
                            Git
                        </div>

                        <div className="tecnologia">
                            <img src="/tecnologia/Vite.js.png" width={50} />
                            Vite
                        </div>

                        <div className="tecnologia">
                            <img src="/tecnologia/Azios.png" width={50} />
                            Axios
                        </div>

                        <div className="tecnologia">
                            <img src="/tecnologia/NPM.png" width={50} />
                            NPM
                        </div>

                    </div>

                </div>

                <div className="contato"   >

                    <h3>SKILLS</h3>

                    <h2>Vamos conversar?</h2>

                    <p>
                        Estou sempre aberto a novas oportunidades,
                        <br />
                        parccerias e projetos interessantes.
                    </p>

                    <button>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=nh00541e@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconMail stroke={1.5} />
                            Entrar em contato
                        </a>

                    </button>

                    <div className="left-social">

                        <a
                            href="https://www.linkedin.com/in/pedro-henrique-lino-576950414/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconBrandLinkedinFilled />
                        </a>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=nh00541e@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconMailFilled />
                        </a>

                        <a
                            href="https://github.com/PedroHenriqueLino"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconBrandGithubFilled />
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Contato;