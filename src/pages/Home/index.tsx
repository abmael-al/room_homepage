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
        <main className="hero">
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

            <section className="about-section">
                <figure className='about-dark-image'>
                    <img 
                        className="dark-image"
                        src='/images/image-about-dark.jpg'
                        alt="An image depicting dark furniture."
                    />
                </figure>
                
                <div className="about-body">
                    <h3 className="about-title secondary-heading">About our furniture</h3>
                    <p className="about-copy">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sit quibusdam, dolores, tempore in, ducimus obcaecati vel iusto eveniet illum eaque ab voluptate nostrum nam libero numquam nulla quidem assumenda perferendis consequatur modi reiciendis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                
                <figure className='about-light-image'>
                    <img 
                        className="light-image"
                        src='/images/image-about-light.jpg'
                        alt="An image depicting light furniture."
                    />
                </figure>
            </section>
        </main>
    )
}

const Home = () => {
    return (
        <HeroSection />
    )
}

export { Home };