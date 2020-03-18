
// const journal = [
//     {
//         id: 1,
//         date: "07/24/2025",
//         concept: "HTML & CSS",
//         entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
//         mood: "Ok"
//     },
//     {
//         id: 2,
//         date: "07/26/2025",
//         concept: "Complex Flexbox",
//         entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
//         mood: "Sad"
//     }
// ]


// export const useJournalEntries = () => {
//     const sortedByDate = journal.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }

let entries = []

export const getJournalEntries = () => {
    return fetch("http://localhost:3000/entries")
        .then(response => response.json())
        .then(
            parsedEntries => {
                console.table(parsedEntries)
                entries = parsedEntries
            })
}

export const useJournalEntries = () => {
   return entries.slice()
}
  



export const saveJournalEntry = entry => {
    return fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getJournalEntries)
    // .then(dispatchStateChangeEvent)
}
