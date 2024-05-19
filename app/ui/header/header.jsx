'use client'
import styles from './header.module.css'

import SocialsPanel from './props/socials';
import ImprintLink from './props/links/imprint';
import OpenMenuIcon from './props/menu/open';

import { useState } from 'react';
import CloseMenuIcon from './props/menu/close';
import HeadingLink from './props/links/heading';

export default function Header() {
    const [isOpen, setOpen] = useState(false);

    const openMenu = () => { setOpen(true) };
    const closeMenu = () => { setOpen(false) };

    return (
        <nav className={styles.header + (isOpen ? ' ' + styles.open : '')}>
            {!isOpen ?
                <>
                    <HeadingLink className={styles.title}/>
                    <ImprintLink className={styles.links}/>
                    <SocialsPanel className={styles.linkicons}/>
                </>
            :
                <div className={'center v h ' + styles.headercontent}>
                    <ImprintLink/>
                    <SocialsPanel/>
                </div>
            }
            <OpenMenuIcon className={styles.openMenu} onClick={openMenu} />
            <CloseMenuIcon className={styles.closeMenu} onClick={closeMenu} />
        </nav>
    );
}