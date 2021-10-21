function getNotesFromLocalStorage() {
  let notesJSON = localStorage.getItem("notes");
  return notesJSON ? JSON.parse(notesJSON) : [];
}

function removeNote(notes, id) {
  let index = notes.findIndex((note) => {
    return note.id === id;
  });
  notes.splice(index, 1);
}
function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function createNoteParagraph(notes, filters, note) {
  let p = document.createElement("a");
  let button = document.createElement("button");
  button.textContent = "Delete";
  p.textContent = note.title;
  // # hash property of the url, whatever comes after # wont affect our url but we can use it to send note id
  p.setAttribute("href", `./note.html#${note.id}`);
  button.addEventListener("click", function () {
    removeNote(notes, note.id);
    renderNotes(notes, filters);
    saveNotes(notes);
  });
  let div = document.createElement("div");
  div.appendChild(button);
  div.appendChild(p);
  return div;
}

function renderNotes(notes, filters) {
  document.querySelector("#notes-div").innerHTML = "";
  let filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );
  filteredNotes.sort((a, b) => {
    if (filters.sortBy === "edited") {
      if (a.updated > b.updated) {
        return -1;
      } else if (b.updated > a.updated) {
        return 1;
      } else {
        return 0;
      }
    } else if (filters.sortBy === "created") {
      if (a.created > b.created) {
        return -1;
      } else if (b.created > a.created) {
        return 1;
      } else {
        return 0;
      }
    } else if (filters.sortBy === "alphabetical") {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      else if (b.title.toLowerCase() < a.title.toLowerCase()) return 1;
      else return 0;
    }
  });
  filteredNotes.forEach((note) => {
    let div = createNoteParagraph(notes, filters, note);
    document.querySelector("#notes-div").appendChild(div);
  });
}
