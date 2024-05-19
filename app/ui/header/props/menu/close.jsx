import Image from 'next/image';
import xSVG from '@/public/svgs/x.svg'

export default function CloseMenuIcon({ className, onClick }) {
    return (<div
        className={className}
        onClick={onClick}
    >
        <Image
            src={xSVG}
            width={30}
            height={30}
            alt='Close Menu'
        />
    </div>);
}