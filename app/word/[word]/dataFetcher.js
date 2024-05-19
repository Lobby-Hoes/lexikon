'use server'

// Simulate Fetching
export default async function fetchData(word) {
    let data;
    try {
        data = await fetch('https://data.hobbylos.online/graphql', {
            body: JSON.stringify({ query: '{ word(filter: { word_contains: "' + word + '" }) { word type explanation examples closeWords } }' }),
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
    const finalData = json.data.word;
    if (finalData.length == 0) return null;
    return finalData[0];
}

export async function fetchWholeData() {
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
    const finalData = json.data.word;
    if (finalData.length == 0) return null;
    return finalData;
}