import Image from 'next/image';
import menuSVG from '@/public/svgs/menu.svg'

export default function OpenMenuIcon({ className, onClick }) {
    return (<div
        className={className}
        onClick={onClick}
    >
        <Image
            src={menuSVG}
            width={30}
            height={30}
            alt='Open Menu'
        />
    </div>);
}