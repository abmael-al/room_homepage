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
                <h2 className="showcase-card-title primary-heading">{title}</h2>
                <p className="showcase-card-supporint-text">{supportingText}</p>
                <PrimaryButton />
            </div>
        </div>
    )
}

export { ShowcaseCard }