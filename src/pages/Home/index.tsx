import { NavBar } from "../../components/NavBar"
import { Logo } from "../../components/Logo"

const HeroSection = () => {
    return (
        <section>
            <header className="hero-header">
                <Logo />
                <NavBar />
            </header>
        </section>
    )
}

const Home = () => {
    return (
        <HeroSection />
    )
}

export { Home };