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
                    Feel free to check out my portfolio. Hope to hear from you soon!</p>
            </section>
            <section className="contact-info">
                <h4>Contact info</h4>
                <ul>
                    <li>joyful.kevin.tsai@gmail.com</li>
                </ul>
            </section>
            <section className="portfolio">
                <h4>Portfolio</h4>
                <ul>
                    <li>Connect 4 AI
                        <ul>
                            <li>
                                Play against an AI in the classic Connect 4 board game! 
                                This AI is powered by the minimax algorithm with alpha-beta pruning. 
                                Give the game a try, and see if you can beat the AI!
                            </li>
                            <li>
                                <Link href="/connect4"><a>Play game</a></Link>
                            </li>
                            <li>
                                <a href="https://github.com/kevin-tsai-93/resume-website/tree/main/components/portfolio/connect_4_game" target="_blank">See code</a>
                            </li>
                        </ul>
                    </li>
                    <li>Newspaper Template
                        <ul>
                            <li>
                                Designed with responsiveness in mind, this newspaper template will catch your eye.
                                Whether you're behind a computer screen or mobile device, you're sure to indulge in this online newspaper experience!
                            </li>
                            <li>
                                <Link href="/newspaper"><a>Read newspaper</a></Link>
                            </li>
                            <li>
                                <a href="https://github.com/kevin-tsai-93/resume-website/tree/main/components/portfolio/newspaper_template" target="_blank">See code</a>
                            </li>
                        </ul>
                    </li>
                    <li>Snake Game in Excel
                        <ul>
                            <li>
                                Fascinated by data and all that it reveals, I decided to program the snake game in Excel (using VBA code) and 
                                connect the data from my play history to a dashboard. I showcase this game in the following YouTube video, 
                                highlighting some of the interesting features of Excel!
                            </li>
                            <li>
                                <Link href="/snake"><a>Watch video</a></Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            
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
                    <li className="certificate"><a href="https://coursera.org/share/3b01d11f71c8ad2bcff4981bb4d8b33b" target="_blank">DeepLearning.AI's Deep Learning Specialization @ Coursera</a></li>
                    <li className="certificate"><a href="https://coursera.org/share/b9ae4223e66a662e9ad2b3b62c76c5f5" target="_blank">Stanford's Machine Learning Course @ Coursera</a></li>
                    <li className="certificate"><a href="https://coursera.org/share/fac2254a6ba508f9049fc6d9b81a1b7d" target="_blank">UC San Diego's Algorithmic Toolbox Course @ Coursera</a></li>
                    <li className="certificate"><a href="https://coursera.org/share/a3c5e3a4d33081a13c481dedd9432324" target="_blank">UC San Diego's Data Structures Course @ Coursera</a></li>
                    <li className="certificate"><a href="https://coursera.org/share/e5af870438b34d16205dd2fc4a31fa0a" target="_blank">UC San Diego's Algorithms on Graphs Course @ Coursera</a></li>
                    <li className="certificate"><a href="https://coursera.org/share/ab0770f27807f7b8888a86b91c69bb0a" target="_blank">UC San Diego's Algorithms on Strings Course @ Coursera</a></li>
                    <li className="certificate"><a href="https://coursera.org/share/a9e0f13f32a97951ef17c535018e341c" target="_blank">Imperial College London's Mathematics for Machine Learning: Linear Algebra Course @ Coursera</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;