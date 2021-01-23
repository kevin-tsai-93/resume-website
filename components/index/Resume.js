import Link from "next/link";

const Resume = () => {
    return (
        <div className="container">
            <h3 className="typing-animation-text">
            Hi! I'm Kevin Tsai. I'm a front-end web developer and software engineer. 😊</h3>
            <section className="about-me">
                <h4>About me</h4>
                <p>Hi! I'm Kevin Tsai. Your friendly front-end web developer and software engineer. I enjoy building content on the web and solving problems through code. 
                    I also have a math-heavy and data analytical background, having obtained both an M.S. and B.S. in Statistics. 
                    Feel free to check out my portfolio and interact with my projects. Hope to hear from you soon!</p>
            </section>
            <section className="portfolio">
                <h4>Portfolio</h4>
                <ul>
                    <li>Connect 4 AI
                        <ul>
                            <li>
                                Play against an AI in the classic Connect 4 board game! 
                                The AI is powered by the minimax algorithm with alpha-beta pruning. 
                                Give the game a try, and see if you can beat the AI!
                            </li>
                            <li>
                                <Link href="/connect4"><a>See app</a></Link>
                            </li>
                            <li>
                                <a href="/" target="_blank">See code</a>
                            </li>
                        </ul>
                    </li>
                    <li>Newspaper Blog
                        <ul>
                            <li>
                                This is a newspaper blog.
                            </li>
                            <li>
                                <Link href="/connect4"><a>See app</a></Link>
                            </li>
                            <li>
                                <a href="/" target="_blank">See code</a>
                            </li>
                        </ul>
                    </li>
                    <li>Beautiful Form
                        <ul>
                            <li>
                                This is a beautiful form.
                            </li>
                            <li>
                                <Link href="/form"><a>See app</a></Link>
                            </li>
                            <li>
                                <a href="/" target="_blank">See code</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            
            {/*
                <section className="portfolio-list">
                <h4>Portfolio</h4>
                <div className="container">
                    <div className="row">
                        <div className="card mb-3 col-12 ml-xl-5 mr-xl-1 col-xl-3 d-flex align-items-stretch" style={{width: "auto"}}>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Connect 4 AI</h5>
                                <p className="card-text">
                                    Play against an AI in the classic Connect 4 board game! 
                                    The AI is powered by the minimax algorithm with alpha-beta pruning. 
                                    Give the game a try, and see if you can beat the AI!
                                </p>
                                <div class="row justify-content-around justify-content-xl-start mt-auto">
                                    <div class="col-4">
                                        <Link href="/connect4"><a className="btn btn-success">See app</a></Link>
                                    </div>
                                    <div class="col-4">
                                        <a className="btn btn-warning ml-xl-5" href="/" target="_blank">See code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 col-12 mx-xl-5 col-xl-3 d-flex align-items-stretch" style={{width: "auto"}}>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">A Beautiful Form</h5>
                                <p className="card-text">Keep the description short.</p>
                                <div class="row justify-content-around justify-content-xl-start mt-auto">
                                    <div class="col-4">
                                        <Link href="/form"><a className="btn btn-success">See app</a></Link>
                                    </div>
                                    <div class="col-4">
                                        <a className="btn btn-warning ml-xl-5" href="/" target="_blank">See code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3 col-12 mr-xl-5 ml-xl-1 col-xl-3 d-flex align-items-stretch" style={{width: "auto"}}>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Some Other Project</h5>
                                <p className="card-text">Keep the description short.</p>
                                <div class="row justify-content-around justify-content-xl-start mt-auto">
                                    <div class="col-4">
                                        <Link href="/"><a className="btn btn-success">See app</a></Link>
                                    </div>
                                    <div class="col-4">
                                        <a className="btn btn-warning ml-xl-5" href="/" target="_blank">See code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            */}  
            
            <section className="toolkit">
                <h4>Toolkit</h4>
                <ul>
                    <li className="tool">HTML, CSS, JavaScript, React</li>
                    <li className="tool">Node, Express, jQuery, Rest, API, MongoDB</li>
                    <li className="tool">Bootstrap, Semantic UI, Material-UI</li>
                    <li className="tool">C, C++, Java, Python, R</li>
                    <li className="tool">and more!</li>
                </ul>
            </section>            
            <section className="education">
                <h4>Education</h4>
                <ul>
                    <li className="degree"><strong>M.S. Statistics</strong> <span className="school">San Jose State University</span></li>
                    <li className="degree"><strong>B.S. Statistics</strong> <span className="school">University of California, Davis</span></li>
                </ul>
            </section>            
            <section className="certificates">
                <h4>Certificates</h4>
                <ul>
                    <li className="certificate"><a href="https://coursera.org/share/b9ae4223e66a662e9ad2b3b62c76c5f5" target="_blank">Stanford's Machine Learning Course @ Coursera</a></li>
                    <li className="certificate"><a href="https://coursera.org/share/3b01d11f71c8ad2bcff4981bb4d8b33b" target="_blank">DeepLearning.AI's Deep Learning Specialization @ Coursera</a></li>
                </ul>
            </section>            
            <section className="contact-info">
                <h4>Contact info</h4>
                <ul>
                    <li><a href="https://www.linkedin.com/in/kevin-tsai-146971bb/" target="_blank">LinkedIn</a></li>
                    <li>joyful.kevin.tsai@gmail.com</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;