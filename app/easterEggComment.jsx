'use client'
import { useEffect, useState } from "react";

export default function EasterEggComment() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count > 0) return;
        setCount(count+1);
        const comment = document.createComment(' Made with <3 by fluffy.6969 (Discord) ');
        document.head.appendChild(comment);
    }, [count])
    return (<></>);
}