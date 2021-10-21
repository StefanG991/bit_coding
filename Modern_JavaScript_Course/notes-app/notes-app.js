let notes = getNotesFromLocalStorage();
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

let filters = {
  searchText: "",
  sortBy: "edited",
};

renderNotes(notes, filters);

document.querySelector("#notes-input").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#create-note").addEventListener("click", function (e) {
  let id = uuidv4();
  notes.push({
    id: id,
    created: moment().valueOf(),
    updated: moment().valueOf(),
    title: "Unnamed note",
    body: "",
  });
  saveNotes(notes);
  location.assign(`./note.html#${id}`);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

window.addEventListener("storage", function (e) {
  console.log(e);
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});
