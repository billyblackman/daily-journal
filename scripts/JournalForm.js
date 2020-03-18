import { saveJournalEntry } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".journalForm")
// const eventHub = document.querySelector(".container")

export const JournalFormComponent = () => {
    contentTarget.innerHTML= `
    <h1>Daily Journal</h1>
    <form class="form" action="">
        <fieldset>
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
    </form>
    <form class="form" action="">
        <fieldset>
            <label for="conceptsCovered">Concepts covered</label>
            <input type="text" name="conceptsCovered" id="conceptsCovered">
        </fieldset>
    </form>
    <form class="form" action="">
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <input type="textarea" name="journalEntry" id="journalEntry">
        </fieldset>
    </form>
    <form class="form" action="">
        <fieldset>
            <label for="mood">Mood for the day</label>

            <select id="mood" name="mood">
                <option value="happy">Happy</option>
                <option value="excited">Excited</option>
                <option value="inspired">Inspired</option>
                <option value="zazzled">Zazzled</option>
                <option value="stressed">Stressed</option>
                <option value="angry">Angry</option>
                <option value="burnedOut">Burned Out</option>
                <option value="content">Content</option>
                <option value="sad">Sad</option>
                <option value="embarrassed">Embarrassed</option>
                <option value="pensive">Pensive</option>
            </select>

        </fieldset>
    </form>
    <button type="submit" id="submitButton">Record Journal Entry</button>
    `
}


//Adding an event listener to listen for the submit button click event

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitButton") {

        const date = document.querySelector("#journalDate").value
        const concepts = document.querySelector("#conceptsCovered").value
        const text = document.querySelector("#journalEntry").value
        const mood = document.querySelector("#mood").value

    
    const createEntry = {
            date: date,
            concepts: concepts,
            entry: text,
            mood: mood
        }

        saveJournalEntry(createEntry)
    }
})