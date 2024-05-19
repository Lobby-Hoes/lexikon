'use server'

import getDistance from "./levershteinDistance";

export async function getClosestWords(originWord) {
    'use server'
    let data;
    try {
        data = await fetch('https://data.hobbylos.online/graphql', {
            body: JSON.stringify({ query: '{ word { word type explanation examples closeWords } }' }),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        });
        if (!data) return null;
    }
    catch { return null; }
    let json;
    try {
        json = await data.json();
        if (!json) return null;
    }
    catch { return null }
    const words = json.data.word;
    if (words.length == 0) return null;
    const toBeSorted = [];
    words.forEach(word => {
        toBeSorted.push({ word, distance: getDistance(originWord, word.word) })
    });
    toBeSorted.sort((a, b) => {
        if (a.distance < b.distance) return -1;
        if (a.distance > b.distance) return 1;
        return 0;
    });
    return toBeSorted;
}