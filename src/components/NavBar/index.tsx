import { ReactComponent as ClosingIcon } from '../../assets/icons/icon-close.svg';
import { ReactComponent as OpeningIcon } from '../../assets/icons/icon-open.svg';

import { useState } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize'

interface NavItemProps {
    text: string;
    link: string;
}

type Action = 'open' | 'close';

interface ActionButtonProps {
    onClick?(): void;
    action: Action;
}

const ActionButton = ({ onClick, action }: ActionButtonProps) => {
    return (
        <button 
            className='flex place-center'
            onClick={onClick}
        >   
            {(action === 'open')
                ? <OpeningIcon />
                : <ClosingIcon />
            }
        </button>
    )
}

const NavItem = ({ text, link }: NavItemProps) => {
    return (
        <li className='navigation-item'>
            <a href={link} className='navigation-item-anchor'>{ text }</a>
        </li>
    )
}

const NavList = () => {
    return (
        <nav>
            <ul className='navigation-list'>
                <NavItem text="home" link="." />
                <NavItem text="shop" link="." />
                <NavItem text="about" link="." />
                <NavItem text="contact" link="." />
            </ul>
        </nav>
    )
}

const NavBarMobile = () => {
    const [isNavHidden, setIsNavHidden] = useState(true);

    const onClickHandler = () => {
        setIsNavHidden(!isNavHidden);
    }

    return (
        <div className="navigation-bar-mobile">
            <div className={isNavHidden ? 'block' : 'hidden'}>
                <ActionButton action='open' onClick={onClickHandler} />
            </div>

            <div className={isNavHidden ? 'hidden' : 'flex overlay'}>
                <ActionButton action='close' onClick={onClickHandler} />
                
                <NavList />
            </div>
        </div>
    )
}

const NavBarDesktop = () => {
    return (
        <div className='navigation-bar-desktop'>
            <NavList />
        </div>
    )
}

const NavBar = () => {
    const DESKTOP_BREAK_POINT = 768;
    const windowSize = useWindowSize();

    return (
        <>
            {(windowSize.width > DESKTOP_BREAK_POINT) 
                ? <NavBarDesktop />
                : <NavBarMobile />
            }
        </>
    )
}

export { 
    NavBar, 
};