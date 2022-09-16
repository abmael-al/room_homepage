import { PrimaryButton } from "../PrimaryButton"

interface ShowcaseCardProps {
    title: string;
    supportingText: string;
    smallImage: string;
    largeImage: string;
    smallImageWidth: number;
    largeImageWidth: number;
}

const ShowcaseCard = ({ title, supportingText, smallImage, largeImage, smallImageWidth, largeImageWidth }: ShowcaseCardProps) => {
    return (
        <div className="showcase-card">
            <figure className="showcase-card-thumbnail">
                <img 
                    src={smallImage}
                    alt=""
                    loading="eager"
                    decoding="sync"
                    srcSet={`${smallImage} ${smallImageWidth}w,
                            ${largeImage} ${largeImageWidth}w`}
                />
            </figure>
            <div className="showcase-card-body">
                <div className="wrapper">
                    <h2 className="showcase-card-title primary-heading">{title}</h2>
                    <p className="showcase-card-supporting-text">{supportingText}</p>
                    <PrimaryButton text='shop now' />
                </div>
            </div>
        </div>
    )
}

export { ShowcaseCard }