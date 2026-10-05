import './NavBar.css';

import {
    IconBrandLinkedinFilled,
    IconBrandGithubFilled,
    IconMenu2,
    IconX
} from '@tabler/icons-react';

import { useState } from 'react';

const NavBar = () => {

    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (section) => {

        setActive(section);
        setMenuOpen(false);

        const sections = {
            home: ".home-content",
            sobre: ".sobre-content",
            projetos: ".projetos-content",
            skills: ".skills",
            contato: ".contato-content"
        };

        const element = document.querySelector(sections[section]);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (

        <div className="nav-content">

            {/* Desktop */}

            <div className="nav-logo">

                <img
                    src="/navicon.png"
                    alt="Ícone de navegação"
                />

                <h2>Pedro Henrique</h2>

            </div>

            <div className="nav-menu">

                <ul>

                    <li
                        className={active === "home" ? "active" : ""}
                        onClick={() => scrollToSection("home")}
                    >
                        Início
                    </li>

                    <li
                        className={active === "sobre" ? "active" : ""}
                        onClick={() => scrollToSection("sobre")}
                    >
                        Sobre
                    </li>

                    <li
                        className={active === "projetos" ? "active" : ""}
                        onClick={() => scrollToSection("projetos")}
                    >
                        Projetos
                    </li>

                    <li
                        className={active === "skills" ? "active" : ""}
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>

                    <li
                        className={active === "contato" ? "active" : ""}
                        onClick={() => scrollToSection("contato")}
                    >
                        Contatos
                    </li>

                </ul>

            </div>

            <div className="nav-social">

                <a
                    href="https://github.com/PedroHenriqueLino"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/logoGitHHub.png"
                        alt="GitHub"
                    />
                </a>

                <a
                    href="https://www.linkedin.com/in/pedro-henrique-lino-576950414/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconBrandLinkedinFilled />
                </a>

            </div>

        </div>
    );
};

export default NavBar;