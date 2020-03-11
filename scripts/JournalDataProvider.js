



// export const useJournalEntries = () => {
//     const sortedByDate = journal.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }

export const getJournalEntries = () => {
    return fetch("http://localhost:3000/entries")
        .then(response => response.json())
        .then(
            parsedEntries => {
                console.table(parsedEntries)
                const entries=parsedEntries
            }
        )
}