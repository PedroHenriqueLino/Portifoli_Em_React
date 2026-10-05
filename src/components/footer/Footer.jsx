import './Footer.css';

import { useEffect, useRef } from 'react';

const Footer = () => {

    const footerRef = useRef(null);

    useEffect(() => {

        const footer = footerRef.current;

        if (!footer) return;

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (entry.isIntersecting) {

                    footer.classList.add('footer-visible');

                    observer.unobserve(footer);
                }
            },

            {
                threshold: 0.2
            }

        );

        observer.observe(footer);

        return () => observer.disconnect();

    }, []);

    return (

        <footer ref={footerRef} className="footer">

            <p>
                © 2026 Pedro Henrique. Todos os direitos reservados.
            </p>

            <span>
                Desenvolvido com React
            </span>

        </footer>
    );
};

export default Footer;