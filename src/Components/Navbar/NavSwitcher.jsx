import React, { useEffect, useState } from 'react';
import HeroNav from './HeroNav';
import AllNav from './Nav';

const NavbarSwitcher = () => {
    const [showMainNav, setShowMainNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTriggerHeight = 500;

            if (window.scrollY > scrollTriggerHeight) {
                setShowMainNav(true);
            } else {
                setShowMainNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {showMainNav ? <AllNav /> : <HeroNav />}
        </>
    );
};

export default NavbarSwitcher;
