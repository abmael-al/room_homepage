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
            <a href={link} className='navigation-item-anchor'>{text}</a>
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
            <div>
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
    return (
        <>
            <NavBarDesktop />
            <NavBarMobile />
        </>
    )
}

export { 
    NavBar, 
};