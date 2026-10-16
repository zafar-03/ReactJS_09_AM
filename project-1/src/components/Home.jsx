function Home() {
    return (
        <main>
            <section id="hero">
                <h1>Welcome to MyWebsite</h1>
                <p>
                    Learn, Explore and Build Amazing Websites
                    using HTML and CSS.
                </p>

                <button>Get Started</button>
            </section>

            <section id="about">
                <h2>What We Offer</h2>

                <div id="cards">
                    <div id="card1">
                        <h3>HTML</h3>
                        <p>Build the structure of your website using HTML.</p>
                    </div>

                    <div id="card2">
                        <h3>CSS</h3>
                        <p>Design beautiful and responsive websites using CSS.</p>
                    </div>

                    <div id="card3">
                        <h3>Projects</h3>
                        <p>Create real-world projects and improve your skills.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;