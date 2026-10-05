import './Inicio.css';

//icons
import {
    IconDownload,
    IconBrandLinkedinFilled,
    IconMail,
    IconMailFilled,
    IconBrandGithubFilled
} from '@tabler/icons-react';

const Inicio = () => {
    return (
        <div className='inicio-content'>

            <div className="inicio-left">
                <div className="left-info">
                    <h4>Olá, eu sou</h4>
                    <h1>Pedro <span>Henrique</span></h1>
                    <h2>Desenvolvedor <span>Front-End</span></h2>
                    <p>
                        transformando ideias em interfaces modernas e <br />
                        responsivas. Sou apaixonado por tecnologia e estou <br />
                        sempre aprendendo algo novo
                    </p>
                </div>

                <div className="left-btn">
                    <button id="ver-btn">
                        <a
                            id="ver-btn"
                            href="/vaga-match-curriculo.pdf"
                            download="vaga-match-curriculo.pdf"
                        >
                            <IconDownload />
                            Baixar currículo
                        </a>
                    </button>

                    <button
                        id="Entrar-btn"
                    >
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=nh00541e@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconMail />
                            Entrar em contato
                        </a>

                    </button>
                </div>


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

            <div className="inicio-right">
                <img src="user-logo.png" alt="" />
            </div>
        </div>
    )
}

export default Inicio