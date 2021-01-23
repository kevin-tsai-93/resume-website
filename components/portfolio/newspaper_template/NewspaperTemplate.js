const NewspaperTemplate = () => {
    return (
        <div className="container">
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <a className="p-2 text-muted" href="#">Politics</a>
                    <a className="p-2 text-muted" href="#">Economics</a>
                    <a className="p-2 text-muted" href="#">Science</a>
                    <a className="p-2 text-muted" href="#">Technology</a>
                    <a className="p-2 text-muted" href="#">Health</a>
                    <a className="p-2 text-muted" href="#">Business</a>
                    <a className="p-2 text-muted" href="#">Sports</a>
                    <a className="p-2 text-muted" href="#">Culture</a>
                    <a className="p-2 text-muted" href="#">Music</a>
                    <a className="p-2 text-muted" href="#">Religion</a>
                    <a className="p-2 text-muted" href="#">Fashion</a>
                    <a className="p-2 text-muted" href="#">Opinion</a>
                </nav>
            </div>

            <div className="jumbotron p-3 p-md-5 text-dark border rounded bg-light">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">How I Found My Calling</h1>
                    <p className="lead my-3">It took me 40 years to find my calling. As I sat at the dining table, 
                    staring at the puppies wrestling with each other...</p>
                    <p className="lead mb-0"><a href="#" className="text-dark font-weight-bold">Continue reading...</a></p>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-primary">Science</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href="#">Covid Vaccine a Success!</a>
                            </h3>
                            <div className="mb-1 text-muted">Jan 20</div>
                            <p className="card-text mb-auto">The most recent trials in covid vaccine testing report a whopping 99% success rate. This is positive news for the whole world...</p>
                            <a href="#">Continue reading</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-lg-block" src="https://source.unsplash.com/random/200x250?news" alt="Card image cap" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-success">Travel</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href="#">North Korea Still Not Recommended for Travel</a>
                            </h3>
                            <div className="mb-1 text-muted">Jan 20</div>
                            <p className="card-text mb-auto">North Korea remains one of the most isolated countries in the world. Thinking about traveling there? Maybe, you'd be better...</p>
                            <a href="#">Continue reading</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-lg-block" src="https://source.unsplash.com/random/200x250" alt="Card image cap" />
                    </div>
                </div>
            </div>

            <main role="main" className="container">
                <div className="row">
                    <div className="blog-main">
                        <h3 className="pb-3 mb-4 font-italic border-bottom">
                            From the Archive
                        </h3>

                        <div className="blog-post">
                            <h2 className="blog-post-title">Gluten-Free Grain-Free Pizza</h2>
                            <p className="blog-post-meta">November 09, 2014 by <a href="#">Cheli Johnston</a></p>

                            <p>For those of you on a paleo diet, or simply those who have food allergies to gluten or grains, 
                                do you miss eating pizza? Today, I have good news for you! You don't have to stop eating pizza. 
                                I've developed a recipe where you can eat gluten-free grain-free pizza!
                            </p>
                            <hr />
                            <h3>Ingredients</h3>
                            <ul>
                                <li>1/4 Cup Coconut Flour</li>
                                <li>1/2 Cup Blanched Almond Flour</li>
                                <li>2 Eggs</li>
                                <li>1 Teaspoon Garlic Powder</li>
                                <li>1 Teaspoon Onion Powder</li>
                            </ul>
                            <h3>Directions</h3>
                            <ol>
                                <li>Whisk 2 eggs in a bowl.</li>
                                <li>Add 1 teaspoon of garlic powder and 1 teaspoon of onion powder into the bowl of eggs and mix.</li>
                                <li>Add 1/2 cup of blanched almond flour into the bowl of whisked eggs, and mix.</li>
                                <li>Add 1/4 cup of coconut flour into the bowl, and mix. The mixture should start to look like dough.</li>
                                <li>Compress the dough into a circular shape (with a diameter of about 10 inches) onto an oven safe pan.</li>
                                <li>Heat the dough for 10 minutes at 400F in the oven.</li>
                                <li>Remove the dough and place your favorite toppings onto the dough.</li>
                                <li>Place the pizza back into the oven, and broil on high for 5 minutes or until the edges of the pizza turn golden brown.</li>
                                <li>Let it sit for 3 minutes, and enjoy!</li>
                            </ol>
                            <p>Results may vary. Feel free to experiment around. But I'm sure you'll definitely appreciate being able to eat pizza again!</p>
                        </div>

                    </div>

                </div>

            </main>
        </div>
    );
};

export default NewspaperTemplate;