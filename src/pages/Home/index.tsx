import { NavBar } from "../../components/NavBar"
import { ReactComponent as Logo } from "../../assets/icons/logo.svg"

const HeroSection = () => {
    return (
        <main>
            <header className="hero-header">
                <Logo className="logo" />
                <NavBar />
            </header>
        </main>
    )
}

const Home = () => {
    return (
        <HeroSection />
    )
}

export { Home };