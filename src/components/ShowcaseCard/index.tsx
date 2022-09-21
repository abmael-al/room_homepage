import { PrimaryButton } from "../PrimaryButton"

import { useWindowSize } from "../../hooks/usehooks"

interface ShowcaseCardProps {
    title: string;
    supportingText: string;
    smallImage: string;
    largeImage: string;
    altText: string;
    callToActionButtonText: string;
}

const ShowcaseCard = (
    { 
        title, 
        supportingText, 
        smallImage, 
        largeImage,
        altText, 
        callToActionButtonText
    }: ShowcaseCardProps
) => {
    const windowSize = useWindowSize();
    
    return (
        <div className="showcase-card">
            <div className="showcase-card-thumbnail">
                <img
                    src={
                        windowSize.width < 375
                        ? smallImage
                        : largeImage
                    }
                    alt={altText}
                    loading="eager"
                    decoding="sync"
                />
            </div>
            
            <div className="showcase-card-body">
                <div className="wrapper">
                    <h2 className="showcase-card-title primary-heading">{title}</h2>
                    <p className="showcase-card-supporting-text">{supportingText}</p>
                    
                    <PrimaryButton text={callToActionButtonText} />
                </div>
            </div>
        </div>
    )
}

export { ShowcaseCard }