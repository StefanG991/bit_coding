let notes = getNotesFromLocalStorage();
console.log(notes);
let hash = location.hash;
let id = hash.substring(1);
console.log(id);
let note = notes.find((note) => {
  return note.id === id;
});
if (!note) {
  location.assign("./index.html");
}
document.querySelector("#note-title").value = note.title;
document.querySelector("#note-body").value = note.body;
document.querySelector("#last-change").textContent = `last edited ${moment(
  note.updated
).fromNow()}`;

document.querySelector("#note-title").addEventListener("input", function (e) {
  note.title = e.target.value;
  note.updated = moment().valueOf();
  saveNotes(notes);
  document.querySelector("#last-change").textContent = `last edited ${moment(
    note.updated
  ).fromNow()}`;
});
document.querySelector("#note-body").addEventListener("input", function (e) {
  note.body = e.target.value;
  note.updated = moment().valueOf();
  saveNotes(notes);
  document.querySelector("#last-change").textContent = `last edited ${moment(
    note.updated
  ).fromNow()}`;
});
document.querySelector("#remove-note").addEventListener("click", function () {
  removeNote(notes, id);
  saveNotes(notes);
  location.assign("./index.html");
});

window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    console.log(notes);
    let note = notes.find((note) => {
      return note.id === id;
    });
    if (!note) {
      location.assign("./index.html");
    }
    document.querySelector("#note-title").value = note.title;
    document.querySelector("#note-body").value = note.body;
    document.querySelector("#last-change").textContent = `last edited ${moment(
      note.updated
    ).fromNow()}`;
  }
});
