import { ReactComponent as AngleLeft } from "../../assets/icons/icon-angle-left.svg"
import { ReactComponent as AngleRight } from "../../assets/icons/icon-angle-right.svg"

import { useState } from "react";

interface SlideProps {
    content: JSX.Element;
}

interface CarouselDriveButtonProps {
    scrollDirection: 'right' | 'left';
    onClick(): void;
}

interface CarouselProps {
    slides: JSX.Element[];
}

const Slide = ({ content }: SlideProps) => {
    return (
        <div className='carousel-slide'>
            {content}
        </div>
    )
}

const CarouselDriveButton = ({ onClick, scrollDirection }: CarouselDriveButtonProps) => {
    return (
        <button className='carousel-drive-button' onClick={onClick}>
            {scrollDirection === 'right'
                ? <AngleRight style={{pointerEvents: 'none'}} />
                : <AngleLeft style={{pointerEvents: 'none'}} />
            }
        </button>
    )
}

const Carousel = ({ slides }: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesLength = slides.length;

    const scrollToLeft = () => {
        const _notOutOfRange = currentSlide - 1 >= 0;
        setCurrentSlide((currentSlide) => _notOutOfRange ? currentSlide - 1 : slidesLength - 1)
    }

    const scrollToRight = () => {
        const _notOutOfRange = currentSlide + 1 < slidesLength;
        setCurrentSlide((currentSlide) => _notOutOfRange ? currentSlide + 1 : 0);
    }

    return (
        <section className='carousel'>
            <Slide content={slides[currentSlide]} />
            
            <div className='control-painel'>
                <CarouselDriveButton scrollDirection='left' onClick={scrollToLeft} />
                <CarouselDriveButton scrollDirection='right' onClick={scrollToRight} />
            </div>
        </section>
    )
}

export { Carousel };