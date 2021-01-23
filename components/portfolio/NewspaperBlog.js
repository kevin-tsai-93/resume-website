const NewspaperBlog = () => {
    return (
        <div className="container">
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <a className="p-2 text-muted" href="#">World</a>
                    <a className="p-2 text-muted" href="#">U.S.</a>
                    <a className="p-2 text-muted" href="#">Technology</a>
                    <a className="p-2 text-muted" href="#">Design</a>
                    <a className="p-2 text-muted" href="#">Culture</a>
                    <a className="p-2 text-muted" href="#">Business</a>
                    <a className="p-2 text-muted" href="#">Politics</a>
                    <a className="p-2 text-muted" href="#">Opinion</a>
                    <a className="p-2 text-muted" href="#">Science</a>
                    <a className="p-2 text-muted" href="#">Health</a>
                    <a className="p-2 text-muted" href="#">Style</a>
                    <a className="p-2 text-muted" href="#">Travel</a>
                </nav>
            </div>

            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
                    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently
                        about what's most interesting in this post's contents.</p>
                    <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-primary">World</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href="#">Featured post</a>
                            </h3>
                            <div className="mb-1 text-muted">Nov 12</div>
                            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in
                                to additional content.</p>
                            <a href="#">Continue reading</a>
                        </div>
                        <img className="card-img-right flex-auto d-none d-lg-block" src="https://source.unsplash.com/random/200x250?news" alt="Card image cap" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                        <div className="card-body d-flex flex-column align-items-start">
                            <strong className="d-inline-block mb-2 text-success">Design</strong>
                            <h3 className="mb-0">
                                <a className="text-dark" href="#">Post title</a>
                            </h3>
                            <div className="mb-1 text-muted">Nov 11</div>
                            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in
                                to additional content.</p>
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
                            From the Firehose
                        </h3>

                        <div className="blog-post">
                            <h2 className="blog-post-title">Sample blog post</h2>
                            <p className="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>

                            <p>This blog post shows a few different types of content that's supported and styled with Bootstrap.
                                Basic typography, images, and code are all supported.</p>
                            <hr />
                            <p>Cum sociis natoque penatibus et magnis <a href="#" data-toggle="tooltip" data-placement="top" title="noun: complete gibberish">dis parturient montes</a>, nascetur ridiculus mus.
                                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur
                                est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                            <blockquote>
                                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare
                                    vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </blockquote>
                            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum.
                                Aenean lacinia bibendum nulla sed consectetur.</p>
                            <h2>Heading</h2>
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo
                                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur
                                ac, vestibulum at eros.</p>
                            <h3>Sub-heading</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            <pre><code>Example code block</code></pre>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
                                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                            <h3>Sub-heading</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
                                bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus
                                ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <ul>
                                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                <li>Donec id elit non mi porta gravida at eget metus.</li>
                                <li>Nulla vitae elit libero, a pharetra augue.</li>
                            </ul>
                            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                            <ol>
                                <li>Vestibulum id ligula porta felis euismod semper.</li>
                                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                                <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                            </ol>
                            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
                        </div>

                        <div className="blog-post">
                            <h2 className="blog-post-title">Another blog post</h2>
                            <p className="blog-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>

                            <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur
                                est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                            <blockquote>
                                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare
                                    vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </blockquote>
                            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum.
                                Aenean lacinia bibendum nulla sed consectetur.</p>
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo
                                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur
                                ac, vestibulum at eros.</p>
                        </div>

                        <div className="blog-post">
                            <h2 className="blog-post-title">New feature</h2>
                            <p className="blog-post-meta">December 14, 2013 by <a href="#">Chris</a></p>

                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
                                bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus
                                ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <ul>
                                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                <li>Donec id elit non mi porta gravida at eget metus.</li>
                                <li>Nulla vitae elit libero, a pharetra augue.</li>
                            </ul>
                            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum.
                                Aenean lacinia bibendum nulla sed consectetur.</p>
                            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                        </div>

                    </div>

                </div>

            </main>
        </div>
    );
};

export default NewspaperBlog;