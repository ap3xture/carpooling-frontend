import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    return (
        <section className="hero-section">

            <div className="content">
                <h1>Share<span>.</span> Save<span>.</span> Go Green<span>.</span> Carpooling App<span>.</span></h1>
                <p>
                    Start your journey towards eco-friendly commuting with Carpooling App, where every shared ride means less traffic, lower costs, and a greener planet. Share. Save. Go Green.
                </p>
                <button onClick={() => {
                    navigate("/login")
                }}>Login</button>
                <button onClick={() => {
                    navigate("/signup")
                }}>Signup</button>
            </div>
        </section>
    )
}

export default Home