import styles from './header.module.css'
import Image from 'next/image';
import Link from 'next/link';

import discordSVG from '@/public/svgs/discord.svg'
import githubSVG from '@/public/svgs/github.svg'
import redditSVG from '@/public/svgs/reddit.svg'

export default function Header() {
    return (
        <nav className={styles.header}>
            <Link href='/'>
                <h2 className={styles.title}>Hobbylos Lexikon</h2>
            </Link>
            <div className={styles.links}>
                <Link target='_blank' href='https://hobbylos.online/impressum'>
                    <p>Impressum</p>
                </Link>
            </div>
            <div className={styles.linkicons}>
                <Link target='_blank' href='https://discord.com/invite/xfyWpPt3Uk'><Image
                    src={discordSVG}
                    width={30}
                    height={30}
                    alt='Discord'
                /></Link>
                <Link target='_blank' href='https://github.com/Lobby-Hoes/duden' ><Image
                    src={githubSVG}
                    width={30}
                    height={30}
                    alt='Github'
                /></Link>
                <Link target='_blank' href='https://www.reddit.com/r/Hobbylos/' ><Image
                    src={redditSVG}
                    width={30}
                    height={30}
                    alt='Reddit'
                /></Link>
            </div>
        </nav>
    );
}