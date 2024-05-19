import Link from 'next/link';

export default function HeadingLink({ className }) {
    return (<Link href='/'>
        <h2 className={className}>Hobbylos Lexikon</h2>
    </Link>);
}