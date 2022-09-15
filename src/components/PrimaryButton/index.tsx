import { ReactComponent as Arrow } from "../../assets/icons/icon-arrow.svg"

interface PrimaryButtonProps {
    text: string;
}

const PrimaryButton = ({ text }: PrimaryButtonProps) => {
    return (
        <button className='primary-button'>
            {text}
            <Arrow />
        </button>
    )
}

export { PrimaryButton };