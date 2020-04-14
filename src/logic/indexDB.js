const DB_STORE_NAME = "notes";
const arr = [];
const openDb = (f) => {
  const request = indexedDB.open(DB_STORE_NAME, 1);
  request.onsuccess = function (evt) {
    f(request.result);
  };

  request.onupgradeneeded = function (evt) {
    console.log("openDb.onupgradeneeded");
    const thisDB = evt.target.result;
    if (!thisDB.objectStoreNames.contains(DB_STORE_NAME)) {
      const store = thisDB.createObjectStore(DB_STORE_NAME, {
        keyPath: "id",
        autoIncrement: true,
      });

      store.createIndex("title", "title", { unique: false });
      store.createIndex("date", "date", { unique: false });
      store.createIndex("id", "id", { unique: true });
      openDb(f);
    }
  };
};

const getIndexDB = (f) => {
  openDb(function (db) {
    const transaction = db.transaction([DB_STORE_NAME], "readwrite");
    const store = transaction.objectStore(DB_STORE_NAME);
    let notesDB = [];

    store.openCursor().onsuccess = function (event) {
      let cursor = event.target.result;
      if (cursor) {
        notesDB.push(cursor.value);
        cursor.continue();
      } else {
        f(notesDB);
      }
    };
  });
};

getIndexDB((data) => data.forEach((item) => arr.push(item)));

export const getDataFromIndexDB = () => {
  return arr;
};

export const addNotesToIndexDB = (note) => {
  openDb(function (db) {
    const transaction = db.transaction([DB_STORE_NAME], "readwrite");
    const store = transaction.objectStore(DB_STORE_NAME);

    store.add(note);
  });
};

export const clearIndexDB = () => {
  openDb(function (db) {
    const transaction = db.transaction([DB_STORE_NAME], "readwrite");
    const store = transaction.objectStore(DB_STORE_NAME);

    store.clear();
  });
};

export const removeNotesFromIndexDB = (id) => {
  openDb(function (db) {
    db.transaction([DB_STORE_NAME], "readwrite")
      .objectStore(DB_STORE_NAME)
      .delete(id);
  });
};

export const editNotesFromIndexDB = (newNote) => {
  openDb(function (db) {
    const transaction = db.transaction([DB_STORE_NAME], "readwrite");
    const store = transaction.objectStore(DB_STORE_NAME);

    store.put({ ...newNote.note, id: newNote.id });
  });
};
