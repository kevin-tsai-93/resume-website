import Link from "next/link";

const Resume = () => {
    return (
        <div className="container">
            <header className="header">
                <h1 className="header-primary">
                    <h1 className="header-primary-main">Hi! I'm Kevin Tsai.</h1>
                    <h3 className="header-primary-sub">I'm a software engineer and web developer. 😊</h3>
                </h1>
            </header>
            <section className="about-me">
                <h4 className="about-me-title">About me</h4>
                <p className="about-me-description">Hi! I'm Kevin Tsai. Your friendly software engineer and web developer. I enjoy building content on the web and solving problems through code. 
                    I also hold a math-heavy and data-analytical background, having obtained both an M.S. and B.S. in Statistics. 
                    Hope to hear from you soon!</p>
            </section>
            <section className="contact-info">
                <h4 className="contact-info-title">Contact info</h4>
                <div className="contact-info-description">
                    <span className="contact-info-description-email">joyful.kevin.tsai@gmail.com</span>
                    <span className="contact-info-description-linkedin">
                        <a className="btn btn-white" href="https://www.linkedin.com/in/kevin-tsai-146971bb/" target="_blank">LinkedIn</a>
                    </span>
                </div>
            </section>
            <section className="projects">
                <h4 className="projects-title">Projects</h4>
                <div className="projects-list">
                    <div className="projects-list-connect4">
                        <h5 className="projects-list-connect4-title">Connect 4 AI</h5>
                        <div className="projects-list-connect4-info">
                            <div className="projects-list-connect4-info-description">
                                Play against an AI in the classic Connect 4 board game! 
                                This AI is powered by the minimax algorithm with alpha-beta pruning. 
                                Give the game a try, and see if you can beat the AI!
                            </div>
                            <div className="projects-list-connect4-info-play">
                                <Link href="/connect4"><a className="btn btn-white">Play game</a></Link>
                            </div>
                            <div className="projects-list-connect4-info-code">
                                <a className="btn btn-white" href="https://github.com/kevin-tsai-93/resume-website/tree/main/components/portfolio/connect_4_game" target="_blank">See code</a>
                            </div>
                        </div>
                    </div>
                    <div className="projects-list-excel">
                        <h5 className="projects-list-excel-title">Snake Game in Excel</h5>
                        <div className="projects-list-excel-info">
                            <div className="projects-list-excel-info-description">
                                Fascinated by data and all that it reveals, I programmed the snake game in Excel (for fun, using VBA code) and 
                                connected the data from my play history to a dashboard. I showcase this game in the following YouTube video, 
                                highlighting some of the interesting features of Excel!
                            </div>
                            <div className="projects-list-excel-info-video">
                                <Link href="/snake"><a className="btn btn-white">Watch video</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="toolkit">
                <h4 className="toolkit-title">Toolkit</h4>
                <div className="toolkit-list">
                    <div className="toolkit-list-tool"><strong>HTML, CSS, JavaScript</strong></div>
                    <div className="toolkit-list-tool">React, Node, Express, jQuery, Rest, API, MongoDB</div>
                    <div className="toolkit-list-tool">Bootstrap, Semantic UI, Material-UI</div>
                    <div className="toolkit-list-tool">C, C++, Java, Python, R</div>
                    <div className="toolkit-list-tool">and more!</div>
                </div>
            </section>            
            <section className="education">
                <h4 className="education-title">Education</h4>
                <div className="education-list">
                    <div className="education-list-degree"><strong>M.S. Statistics</strong> <span className="school">San Jose State University</span></div>
                    <div className="education-list-degree"><strong>B.S. Statistics</strong> <span className="school">University of California, Davis</span></div>
                </div>
            </section>            
            <section className="certificates">
                <h4 className="certificates-title">Certificates</h4>
                <div className="certificates-list">
                    <div className="certificates-list-certificate"><a className="btn btn-white" href="https://coursera.org/share/3b01d11f71c8ad2bcff4981bb4d8b33b" target="_blank">DeepLearning.AI's Deep Learning Specialization @ Coursera</a></div>
                    <div className="certificates-list-certificate"><a className="btn btn-white" href="https://coursera.org/share/b9ae4223e66a662e9ad2b3b62c76c5f5" target="_blank">Stanford's Machine Learning Course @ Coursera</a></div>
                    <div className="certificates-list-certificate"><a className="btn btn-white" href="https://coursera.org/share/a9e0f13f32a97951ef17c535018e341c" target="_blank">Imperial College London's Mathematics for Machine Learning: Linear Algebra Course @ Coursera</a></div>
                    <div className="certificates-list-certificate"><a className="btn btn-white" href="https://coursera.org/share/fac2254a6ba508f9049fc6d9b81a1b7d" target="_blank">UC San Diego's Algorithmic Toolbox Course @ Coursera</a></div>
                    <div className="certificates-list-certificate"><a className="btn btn-white" href="https://coursera.org/share/a3c5e3a4d33081a13c481dedd9432324" target="_blank">UC San Diego's Data Structures Course @ Coursera</a></div>
                    <div className="certificates-list-certificate"><a className="btn btn-white" href="https://coursera.org/share/e5af870438b34d16205dd2fc4a31fa0a" target="_blank">UC San Diego's Algorithms on Graphs Course @ Coursera</a></div>
                    <div className="certificates-list-certificate"><a className="btn btn-white" href="https://coursera.org/share/ab0770f27807f7b8888a86b91c69bb0a" target="_blank">UC San Diego's Algorithms on Strings Course @ Coursera</a></div>
                </div>
            </section>
        </div>
    );
};

export default Resume;