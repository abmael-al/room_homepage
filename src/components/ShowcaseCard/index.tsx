import { PrimaryButton } from "../PrimaryButton"

interface ShowcaseCardProps {
    title: string;
    supportingText: string;
    thumbnail: string;
}

const ShowcaseCard = ({ title, supportingText, thumbnail }: ShowcaseCardProps) => {
    return (
        <div>
            <div className="showcase-card-thumbnail">
                <img 
                    src={thumbnail}
                    alt=""
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div className="showcase-card-body">
                <h2 className="showcase-card-title">{title}</h2>
                <p className="showcase-card-supporint-text">{supportingText}</p>
                
                <PrimaryButton />
            </div>
        </div>
    )
}

export { ShowcaseCard }