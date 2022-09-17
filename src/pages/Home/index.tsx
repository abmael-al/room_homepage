import { NavBar } from "../../components/NavBar"
import { Carousel } from "../../components/Carousel"
import { ShowcaseCard } from "../../components/ShowcaseCard"

import { ReactComponent as Logo } from "../../assets/icons/logo.svg"

const SHOWCASE_CARDS_INFO = [
    { 
        title: 'Discover innovative ways to decorate',
        supportingText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sit quibusdam, dolores, tempore in, ducimus obcaecati vel iusto eveniet illum eaque ab voluptate nostrum nam libero numquam nulla quidem assumenda perferendis consequatur modi reiciendis!',
        smallImage: '/images/mobile-image-hero-1.jpg',
        largeImage: '/images/desktop-image-hero-1.jpg',
        smallImageWidth: 375,
        largeImageWidth: 840,
    },
    { 
        title: 'Manufactured with the best materials',
        supportingText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sit quibusdam, dolores, tempore in, ducimus obcaecati vel iusto eveniet illum eaque ab voluptate nostrum nam libero numquam nulla quidem assumenda perferendis consequatur modi reiciendis!',
        smallImage: '/images/mobile-image-hero-2.jpg',
        largeImage: '/images/desktop-image-hero-2.jpg',
        smallImageWidth: 375,
        largeImageWidth: 840,
    },
    { 
        title: 'We are available all across the globe',
        supportingText: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sit quibusdam, dolores, tempore in, ducimus obcaecati vel iusto eveniet illum eaque ab voluptate nostrum nam libero numquam nulla quidem assumenda perferendis consequatur modi reiciendis!',
        smallImage: '/images/mobile-image-hero-3.jpg',
        largeImage: '/images/desktop-image-hero-3.jpg',
        smallImageWidth: 375,
        largeImageWidth: 840,
    },
]

const HeroSection = () => {
    return (
        <main>
            <header className="hero-header">
                <Logo className="logo" />
                <NavBar />
            </header>
            
            <Carousel slides={
                    SHOWCASE_CARDS_INFO.map((showcaseCardInfo) => 
                        <ShowcaseCard {...showcaseCardInfo} />
                    )
                }
            />
        </main>
    )
}

const Home = () => {
    return (
        <HeroSection />
    )
}

export { Home };