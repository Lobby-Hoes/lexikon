import Image from 'next/image';
import Link from 'next/link';
import discordSVG from '@/public/svgs/discord.svg'
import githubSVG from '@/public/svgs/github.svg'
import redditSVG from '@/public/svgs/reddit.svg'

export default function SocialsPanel({ className }) {
    return (<div className={className} >
        <Link target='_blank' href='https://discord.com/invite/xfyWpPt3Uk'><Image
            src={discordSVG}
            width={30}
            height={30}
            alt='Discord'
            style={{ marginRight: '0.5rem' }}
        /></Link>
        <Link target='_blank' href='https://github.com/Lobby-Hoes/duden' ><Image
            src={githubSVG}
            width={30}
            height={30}
            alt='Github'
            style={{ marginRight: '0.5rem' }}
        /></Link>
        <Link target='_blank' href='https://www.reddit.com/r/Hobbylos/' ><Image
            src={redditSVG}
            width={30}
            height={30}
            alt='Reddit'
            style={{ marginRight: '0.5rem' }}
        /></Link>
    </div>);
}