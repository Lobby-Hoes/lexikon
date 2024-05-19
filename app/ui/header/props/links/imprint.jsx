import Link from 'next/link';

export default function ImprintLink({ className }) {
    return (<div className={className} >
        <Link target='_blank' href='https://hobbylos.online/impressum'>
            <p>Impressum</p>
        </Link>
    </div>);
}