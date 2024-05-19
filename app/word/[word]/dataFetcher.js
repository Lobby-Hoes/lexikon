'use server'

// Simulate Fetching
export default async function fetchData(word) {
    let data = null;
    try {
        data = await fetch('https://data.hobbylos.online/graphql', {
            body: 'query { word { word type explanation examples closeWords } }',
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        });
    }
    catch {
        return null;
    }
        // .then(data => {
        // let insertData = data.data.mathefacts.map(({thema, beschreibung, startzeit, endzeit, folge}) => {
        //     let [start, end] = [startzeit, endzeit].map(el => dayjs(el, "hh:mm:ss"));
        //     let diff = dayjs.duration(end.diff(start));
        //     console.log(dayjs(startzeit, "HH:mm:ss"))
        //     let embed = "<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/episode/" + folge.code + "?t=" + toSeconds(startzeit) + "\" width=\"330\" height=\"152 \" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
        //     return [folge.folgenId, folge.folgenname, thema, beschreibung, startzeit, endzeit, diff.format("mm:ss"), embed];
        // });
        // table.rows().add(insertData);
        // });
    if (!data) return null;
    const json = await data.json();
    console.log(json);

    // WIESO KOMMT HIER DER FEHLER????

    return {
        word,
        type: 'verb',
        explanation: 'Damit ist zu Hause abhängen gemeint bzw. in seinen 4 Wänden (Walls).',
        examples: [
            'Ich bin heute wieder am wallen gewesen.',
            'Wallen is mega langweilig.'
        ],
        closeWords: ['walls']
    };
}