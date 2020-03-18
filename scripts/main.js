
import EntryListComponent from "./JournalEntryList.js";
import { getJournalEntries } from "./JournalDataProvider.js";
import { JournalFormComponent } from "./JournalForm.js";


JournalFormComponent()
getJournalEntries().then(() =>
    EntryListComponent()
)