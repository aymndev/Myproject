import "./page.css";

export default function About() {
    return (
        <div id="about-page">
            <div id="description">
                <h2>About us</h2>
                <p>
                    We provide high-quality web development services. <br />
                    Our goal is to help businesses grow online with modern and responsive websites.
                </p>
                <button>Explore Opportunities</button>
            </div>

            <div className="main-content">


                {/* Concept Two */}
                <div className="concept concept-two">
                    {["W", "E", "L", "C", "O", "M","E"].map((letter, index) => (
                        <div key={index} className="hover">
                            <h1>{letter}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
