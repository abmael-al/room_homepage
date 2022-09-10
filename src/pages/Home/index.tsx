import { NavBar } from "../../components/NavBar"

const HeroSection = () => {
    return (
        <section>
            <div>
                <NavBar />
            </div>
        </section>
    )
}

const Home = () => {
    return (
        <HeroSection />
    )
}

export { Home };