import { useState, useEffect } from "react";
import { Main } from "./App.styles";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.jpeg";
import pomofocus from "./assets/pomofocus.gif";
import webstore from "./assets/web-store.gif";
import phone from "./assets/celular-2.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (): void => {
    const navItems: NodeListOf<Element> = document.querySelectorAll('.nav-item');
    const sections: NodeListOf<HTMLElement> = document.querySelectorAll('.section');

    sections.forEach((section: HTMLElement) => {
        const scrollPositionY: number = window.scrollY;
        const sectionStartPosition: number = section.offsetTop;
        const sectionHeight: number = section.offsetHeight;
        const sectionId: string | null = section.getAttribute('id');

        if (sectionId === 'section-one') {
            navItems.forEach((item: Element) => {
                item.classList.remove('actived');
            });
        }

        if (
            scrollPositionY >= sectionStartPosition - 300 &&
            scrollPositionY < sectionStartPosition + sectionHeight - 300
        ) {
            navItems.forEach((item: Element) => {
                item.classList.remove('actived');

                const navLink: HTMLAnchorElement | null = document.querySelector(
                    `header nav a[href='#${sectionId}']`
                );

                if (navLink) {
                    navLink.classList.add('actived');
                }
            });
        }
    });
};
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);


  return (
    <Main>
      <header className="header">
        <div className="wrapper">
          <div className="logo">
            <a href="#section-one">&lt;\Cezar&gt;</a>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#sobre" className="nav-item">Sobre</a>
              </li>
              <li>
                <a href="#projetos" className="nav-item">Projetos</a>
              </li>
              <li>
                <a href="#habilidades" className="nav-item">Habilidades</a>
              </li>
              <li>
                <a href="#contato" className="nav-item">Contato</a>
              </li>
            </ul>
          </nav>
          <div className="social">
            <ul>
              <li>
                <a href="https://github.com/CezarMontenegro" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/cezarmontenegro"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div
            className="hamburguer-icon"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <i className="fas fa-times"></i> : <i className="fa-solid fa-bars"></i>}
          </div>
        </div>
      </header>
      <section id="section-one" className="section section-one">
        <div className="wrapper">
          <div className="about">
            <p>Hello World 👋🏼</p>
            <p>Eu sou Cezar,</p>
            <p className="typing-demo">Desenvolver Web Full Stack.</p>
            <a href="#contato">
              <button>Fale comigo</button>
            </a>
          </div>
          <div className="photo">
            <img src={photo1} alt="Cezar Montenegro" />
          </div>
        </div>
      </section>
      <section id="sobre" className="section section-sobre">
        <div className="wrapper">
          <div className="sobre-header">
            <h2>Sobre mim</h2>
          </div>
          <div className="content">
            <div className="photo">
              <img src={photo2} alt="" />
            </div>
            <div className="about">
              <p>
                {" "}
                Sou estudante de programação apaixonado por tecnologia, com
                ênfase em JavaScript.
              </p>
              <p>
                {" "}
                No front-end, tenho experiência em HTML, CSS e frameworks como
                React.js e Next.js onde desenvolvo interfaces de usuário
                interativas e responsivas. No back-end, estou familiarizado com
                Node.js e Express, onde crio APIs robustas e escaláveis para
                suportar minhas aplicações.
              </p>
              <p>
                {" "}
                Meu objetivo é me tornar um desenvolvedor full-stack, capaz de
                lidar com todas as etapas do desenvolvimento de software, desde
                a concepção até a implementação e manutenção. Estou sempre em
                busca de novos desafios e oportunidades para aprender e crescer
                na área de tecnologia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projetos" className="section section-projetos">
        <div className="wrapper">
          <div className="projetos-header">
            <h2>Projetos</h2>
          </div>
          <div className="cards">
            <div className="project-card">
              <h3>Pomofocus</h3>
              <div className="img-wrapper">
                <img src={pomofocus} alt="" />
                <div className="cover">
                  <a
                    href="https://github.com/CezarMontenegro/pomofocus-frontend?tab=readme-ov-file"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="currentcolor" d="M0 0h24v24H0z"></path>
                      <path
                        d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                        fill="currentcolor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://cezarmontenegro.github.io/pomofocus-frontend/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="currentcolor" d="M0 0h24v24H0z"></path>
                      <path
                        d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                        fill="currentcolor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <p>
                Aplicação baseada no metodo pomodoro, para melhorar
                produtividade nas tarefas diárias..
              </p>
              <p>HTML-CSS-JS-React</p>
            </div>
            <div className="project-card">
              <h3>Web-Store</h3>
              <div className="img-wrapper">
                <img src={webstore} alt="" />
                <div className="cover">
                  <a
                    href="https://github.com/CezarMontenegro/web-store"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="currentcolor" d="M0 0h24v24H0z"></path>
                      <path
                        d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                        fill="currentcolor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://cezarmontenegro.github.io/web-store/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="currentcolor" d="M0 0h24v24H0z"></path>
                      <path
                        d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                        fill="currentcolor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <p>Loja virtual que faz requisições a api do Mercado Livre.</p>
              <p>HTML-CSS-JS-React</p>
            </div>
            <div className="project-card">
              <p>Em breve... </p>
            </div>
          </div>
        </div>
      </section>
      <section id="habilidades" className="section section-habilidades">
        <div className="wrapper">
          <div className="habilidades-header">
            <h2>Habilidades</h2>
          </div>
          <div className="cards">
            <div className="skill-card">
              <i className="fa-solid fa-display fa-4x"></i>
              <h3>Front end</h3>
              <p>
                Desenvolvimento de sites responsivos e interativos utilizando
                tecnologias modernas, como o React e Next, juntamente com
                bibliotecas populares como Tailwind CSS e Styled Components.
              </p>
            </div>
            <div className="skill-card">
              <i className="fa-solid fa-database fa-4x"></i>
              <h3>Back end</h3>
              <p>
                Desenvolvimento de soluções no lado do servidor com Node.js e o
                framework Express. Utilizo abordagens de Desenvolvimento
                Orientado a Testes (TDD) e arquitetura limpa para criar APIs
                eficientes e escaláveis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contato" className="section section-contato">
        <div className="wrapper">
          <div className="contato">
            <h2>Fale comigo!</h2>
            <a
              href="mailto:cezarguimaraes@gmail.com"
              className="contact-ancora"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="#149400"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22 6L12 13L2 6"
                  stroke="#149400"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              cezarguimaraes@gmail.com
            </a>
            <a href="tel:+5585992333851" className="contact-ancora">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#149400"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-smartphone"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              +55 85 992333851
            </a>
            <a href="https://wa.me/+5585992333851" target="_blank">
              <button>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6 14.0001C16.4 13.9001 15.1 13.3001 14.9 13.2001C14.7 13.1001 14.5 13.1001 14.3 13.3001C14.1 13.5001 13.7 14.1001 13.5 14.3001C13.4 14.5001 13.2 14.5001 13 14.4001C12.3 14.1001 11.6 13.7001 11 13.2001C10.5 12.7001 10 12.1001 9.6 11.5001C9.5 11.3001 9.6 11.1001 9.7 11.0001C9.8 10.9001 9.9 10.7001 10.1 10.6001C10.2 10.5001 10.3 10.3001 10.3 10.2001C10.4 10.1001 10.4 9.9001 10.3 9.8001C10.2 9.7001 9.7 8.5001 9.5 8.0001C9.4 7.3001 9.2 7.3001 9 7.3001C8.9 7.3001 8.7 7.3001 8.5 7.3001C8.3 7.3001 8 7.5001 7.9 7.6001C7.3 8.2001 7 8.9001 7 9.7001C7.1 10.6001 7.4 11.5001 8 12.3001C9.1 13.9001 10.5 15.2001 12.2 16.0001C12.7 16.2001 13.1 16.4001 13.6 16.5001C14.1 16.7001 14.6 16.7001 15.2 16.6001C15.9 16.5001 16.5 16.0001 16.9 15.4001C17.1 15.0001 17.1 14.6001 17 14.2001C17 14.2001 16.8 14.1001 16.6 14.0001ZM19.1 4.9001C15.2 1.0001 8.9 1.0001 5 4.9001C1.8 8.1001 1.2 13.0001 3.4 16.9001L2 22.0001L7.3 20.6001C8.8 21.4001 10.4 21.8001 12 21.8001C17.5 21.8001 21.9 17.4001 21.9 11.9001C22 9.3001 20.9 6.8001 19.1 4.9001ZM16.4 18.9001C15.1 19.7001 13.6 20.2001 12 20.2001C10.5 20.2001 9.1 19.8001 7.8 19.1001L7.5 18.9001L4.4 19.7001L5.2 16.7001L5 16.4001C2.6 12.4001 3.8 7.4001 7.7 4.9001C11.6 2.4001 16.6 3.7001 19 7.5001C21.4 11.4001 20.3 16.5001 16.4 18.9001Z"
                    fill="currentcolor"
                  ></path>
                </svg>
                WHATSAPP
              </button>
            </a>
          </div>
          <div className="image">
            <img src={phone} alt="celular" />
          </div>
        </div>
      </section>
      <footer>
        <div className="wrapper">
          <div className="logo">
            <a href="#section-one">&lt;\Cezar&gt;</a>
          </div>
          <div>
            <p>Feito com ❤️ por Cezar Guimarães</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://github.com/CezarMontenegro" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/cezarmontenegro"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {isMenuOpen && (
        <div className="floating-menu">
          <nav className="floating-menu-nav">
            <ul>
              <li onClick={() => setIsMenuOpen(false)}>
                <a href="#sobre">Sobre</a>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <a href="#projetos">Projetos</a>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <a href="#habilidades">Habilidades</a>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
          <div className="floating-menu-social">
            <ul>
              <li>
                <a href="https://github.com/CezarMontenegro" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/cezarmontenegro"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="mailto:cezarguimaraes@gmail.com"
                  className="contact-ancora"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="currentcolor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M22 6L12 13L2 6"
                      stroke="currentcolor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://wa.me/+5585992333851" target="_blank">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6 14.0001C16.4 13.9001 15.1 13.3001 14.9 13.2001C14.7 13.1001 14.5 13.1001 14.3 13.3001C14.1 13.5001 13.7 14.1001 13.5 14.3001C13.4 14.5001 13.2 14.5001 13 14.4001C12.3 14.1001 11.6 13.7001 11 13.2001C10.5 12.7001 10 12.1001 9.6 11.5001C9.5 11.3001 9.6 11.1001 9.7 11.0001C9.8 10.9001 9.9 10.7001 10.1 10.6001C10.2 10.5001 10.3 10.3001 10.3 10.2001C10.4 10.1001 10.4 9.9001 10.3 9.8001C10.2 9.7001 9.7 8.5001 9.5 8.0001C9.4 7.3001 9.2 7.3001 9 7.3001C8.9 7.3001 8.7 7.3001 8.5 7.3001C8.3 7.3001 8 7.5001 7.9 7.6001C7.3 8.2001 7 8.9001 7 9.7001C7.1 10.6001 7.4 11.5001 8 12.3001C9.1 13.9001 10.5 15.2001 12.2 16.0001C12.7 16.2001 13.1 16.4001 13.6 16.5001C14.1 16.7001 14.6 16.7001 15.2 16.6001C15.9 16.5001 16.5 16.0001 16.9 15.4001C17.1 15.0001 17.1 14.6001 17 14.2001C17 14.2001 16.8 14.1001 16.6 14.0001ZM19.1 4.9001C15.2 1.0001 8.9 1.0001 5 4.9001C1.8 8.1001 1.2 13.0001 3.4 16.9001L2 22.0001L7.3 20.6001C8.8 21.4001 10.4 21.8001 12 21.8001C17.5 21.8001 21.9 17.4001 21.9 11.9001C22 9.3001 20.9 6.8001 19.1 4.9001ZM16.4 18.9001C15.1 19.7001 13.6 20.2001 12 20.2001C10.5 20.2001 9.1 19.8001 7.8 19.1001L7.5 18.9001L4.4 19.7001L5.2 16.7001L5 16.4001C2.6 12.4001 3.8 7.4001 7.7 4.9001C11.6 2.4001 16.6 3.7001 19 7.5001C21.4 11.4001 20.3 16.5001 16.4 18.9001Z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <a href="#section-one" className="roll-to-top">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="currentcolor"></circle>
        <path d="M20 27V13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M13 20L20 13L27 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </a>
    </Main>
  );
}

export default App;
