import { ReactComponent as ClosingIcon } from '../../assets/icons/icon-close.svg';
import { ReactComponent as OpeningIcon } from '../../assets/icons/icon-open.svg';

import { useState } from 'react';

interface NavItemProps {
    text: string;
    link: string;
}

type Action = 'open' | 'close';

interface ActionButtonProps {
    onClick?(): void;
    action: Action;
}

interface MobileNavFallbackProps {
    onClickHandler(): void;
} 

const ActionButton = ({ onClick, action }: ActionButtonProps) => {
    return (
        <button 
            className='absolute flex place-center'
            onClick={onClick}
        >   
            {(action === 'open')
                ? <OpeningIcon />
                : <ClosingIcon />
            }
        </button>
    )
}

const MobileNavFallback = ({ onClickHandler }: MobileNavFallbackProps) => {
    return (
        <div className='mobile-fallback relative'>
            <ActionButton action="open" onClick={onClickHandler}/>
            <ActionButton action="close" onClick={onClickHandler}/>
        </div>
    )
}

const NavItem = ({ text, link }: NavItemProps) => {
    return (
        <li>
            <a href={link}>{text}</a>
        </li>
    )
}

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const onClickHandler = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <MobileNavFallback onClickHandler={onClickHandler} />
            
            <nav className={isVisible ? 'visible' : 'hidden'}>
                <ul className='grid flow-column'>
                    <NavItem text="home" link="." />
                    <NavItem text="shop" link="." />
                    <NavItem text="about" link="." />
                    <NavItem text="contact" link="." />
                </ul>
            </nav>
        </>
    )
}

export { 
    NavBar, 
    NavItem, 
    MobileNavFallback 
};