import Head from "next/head";
import Link from "next/link";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Resume = () => {
    return (
        <div>
            <Head>
                <html lang="en-US"/>
                <meta charset="utf-8"/>
                <title>Kevin Tsai's Resume Website</title>
                <meta name="author" content="Kevin Tsai"/>
                <meta name="description" content="This is Kevin Tsai's resume brought to life within a web browser. It was built using the React framework (or library, depending on whom you ask) and hosted on Vercel, powered by Next."/>

                <meta property='og:title' content="Kevin Tsai's Resume Website"/>
                <meta property='og:image' content='../../images/banner.png'/>
                <meta property='og:description' content="Hi! This is my resume website. I'm Kevin Tsai. Your friendly software engineer and web developer, who specializes in the front-end. I enjoy building content on the web and solving problems through code. I also hold a math-heavy and data-analytical background, having obtained both an M.S. and B.S. in Statistics. Hope to hear from you soon!"/>
                <meta property='og:url' content="https://kevin-tsai-resume-website.vercel.app/"/>

                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Stint+Ultra+Condensed&family=Sue+Ellen+Francisco&display=swap" rel="stylesheet"/>
            </Head>
            <body>
                <Row>
                    <Col>
                        <header className="header">
                        <div className="header-primary">
                            <h1 className="header-primary-main">Hi! I'm Kevin Tsai.</h1>
                            <h3 className="header-primary-sub">I'm a web developer and software engineer.</h3>
                        </div>
                    </header>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <section className="about-me">
                            <h4 className="about-me-title">About Me</h4>
                            <p className="about-me-description">Hi! I'm Kevin Tsai. Your friendly software engineer and web developer, who specializes in the front-end. I enjoy building content on the web and solving problems through code. 
                                I also hold a math-heavy and data-analytical background, having obtained both an M.S. and B.S. in Statistics. 
                                Hope to hear from you soon!</p>
                        </section>                        
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={4} className="my-auto">
                        <section className="contact-info">
                            <h4 className="contact-info-title">Contact Info</h4>
                            <div className="contact-info-description">
                                <span className="contact-info-description-email">joyful.kevin.tsai@gmail.com</span>
                                <span className="contact-info-description-linkedin">
                                    <a className="btn" href="https://www.linkedin.com/in/kevin-tsai-146971bb/" target="_blank">LinkedIn</a>
                                </span>
                            </div>
                        </section>
                    </Col>
                    <Col lg={4} md={6} className="my-auto">
                        <section className="toolkit">
                            <h4 className="toolkit-title">Toolkit</h4>
                            <div className="toolkit-list">
                                <div className="toolkit-list-tool"><strong>HTML, CSS, JavaScript</strong></div>
                                <div className="toolkit-list-tool">SCSS, SASS, BEM, Bootstrap, Semantic UI, Material-UI</div>
                                <div className="toolkit-list-tool">MongoDB, Express, React, Node</div>
                            </div>
                        </section>
                    </Col>
                    <Col lg={4} md={6} className="my-auto">
                        <section className="education">
                            <h4 className="education-title">Education</h4>
                            <div className="education-list">
                                <div className="education-list-degree"><span><strong>M.S. Statistics</strong></span><span className="school">San Jose State University</span></div>
                                <div className="education-list-degree"><span><strong>B.S. Statistics</strong></span><span className="school">University of California, Davis</span></div>
                            </div>
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <section className="projects">
                            <h4 className="projects-title">Projects</h4>
                            <div className="projects-list">
                                <div className="projects-list-darkmode">
                                    <h5 className="projects-list-darkmode-title">Dark Mode</h5>
                                    <div className="projects-list-darkmode-info">
                                        <div className="projects-list-darkmode-info-description">
                                            <p>
                                                Are you aware of the importance of dark mode? Every application should have a dark mode. Not joking! The screens from electronic devices can emit
                                                enormous levels of blue light that can harm your eyes if you stare at them for extended periods of time.
                                                Check out my app to experience the huge difference that a dark mode can make.
                                            </p>
                                        </div>
                                        <div className="projects-list-darkmode-info-experience">
                                            <Link href="/darkmode"><a className="btn">Experience dark mode</a></Link>
                                        </div>
                                        <div className="projects-list-darkmode-info-code">
                                            <a className="btn" href="https://github.com/kevin-tsai-93/resume-website/tree/main/components/portfolio/dark_mode" target="_blank">See code</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="projects-list-connect4">
                                    <h5 className="projects-list-connect4-title">Connect 4 AI</h5>
                                    <div className="projects-list-connect4-info">
                                        <div className="projects-list-connect4-info-description">
                                            <p>
                                                Play against an AI in the classic Connect 4 board game! 
                                                This AI is powered by the minimax algorithm with alpha-beta pruning. 
                                                Give the game a try, and see if you can beat the AI!
                                            </p>
                                        </div>
                                        <div className="projects-list-connect4-info-play">
                                            <Link href="/connect4"><a className="btn">Play game</a></Link>
                                        </div>
                                        <div className="projects-list-connect4-info-code">
                                            <a className="btn" href="https://github.com/kevin-tsai-93/resume-website/tree/main/components/portfolio/connect_4_game" target="_blank">See code</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="projects-list-excel">
                                    <h5 className="projects-list-excel-title">Snake Game in Excel</h5>
                                    <div className="projects-list-excel-info">
                                        <div className="projects-list-excel-info-description">
                                            <p>
                                                Fascinated by data and all that it reveals, I programmed the snake game in Excel (for fun, using VBA code) and 
                                                connected the data from my play history to a dashboard. I showcase this game in the following YouTube video, 
                                                highlighting some of the interesting features of Excel!
                                            </p>  
                                        </div>
                                        <div className="projects-list-excel-info-video">
                                            <Link href="/snake"><a className="btn">Play video</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <section className="certificates">
                            <h4 className="certificates-title">Certificates</h4>
                            <div className="certificates-list">
                                <div className="certificates-list-certificate"><a className="btn" href="https://coursera.org/share/3b01d11f71c8ad2bcff4981bb4d8b33b" target="_blank">DeepLearning.AI's Deep Learning Specialization @ Coursera</a></div>
                                <div className="certificates-list-certificate"><a className="btn" href="https://coursera.org/share/b9ae4223e66a662e9ad2b3b62c76c5f5" target="_blank">Stanford's Machine Learning Course @ Coursera</a></div>
                                <div className="certificates-list-certificate"><a className="btn" href="https://coursera.org/share/a9e0f13f32a97951ef17c535018e341c" target="_blank">Imperial College London's Mathematics for Machine Learning: Linear Algebra Course @ Coursera</a></div>
                                <div className="certificates-list-certificate"><a className="btn" href="https://coursera.org/share/fac2254a6ba508f9049fc6d9b81a1b7d" target="_blank">UC San Diego's Algorithmic Toolbox Course @ Coursera</a></div>
                                <div className="certificates-list-certificate"><a className="btn" href="https://coursera.org/share/a3c5e3a4d33081a13c481dedd9432324" target="_blank">UC San Diego's Data Structures Course @ Coursera</a></div>
                                <div className="certificates-list-certificate"><a className="btn" href="https://coursera.org/share/e5af870438b34d16205dd2fc4a31fa0a" target="_blank">UC San Diego's Algorithms on Graphs Course @ Coursera</a></div>
                                <div className="certificates-list-certificate"><a className="btn" href="https://coursera.org/share/ab0770f27807f7b8888a86b91c69bb0a" target="_blank">UC San Diego's Algorithms on Strings Course @ Coursera</a></div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </body>
        </div>
    );
};

export default Resume;