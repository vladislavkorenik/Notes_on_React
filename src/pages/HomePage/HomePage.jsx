import React, { Fragment, useContext, useEffect, useState } from "react";
import { Form } from "../../components/Form/Form";
import { Notes } from "../../components/Notes/Notes";
import { Alert } from "../../components/Alert/Alert";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import { Loader } from "../../components/Loader/Loader";
import { ConnectionModal } from "../../components/ConnectionModal/ConnectionModal";
import { clearIndexDB, getDataFromIndexDB } from "../../logic/indexDB";

export const HomePage = () => {
  let [hasConnection, setHasConnection] = useState(true);
  const { loading, notes, fetchNotes } = useContext(FirebaseContext);

  const sendData = async (note) => {
    await fetch("https://react-todo-9fb46.firebaseio.com/notes.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(note),
    });
  };

  useEffect(() => {
    fetchNotes()
      .then(() => {
        getDataFromIndexDB().forEach((note) => {
          sendData(note);
        });
        clearIndexDB();
      })
      .catch((e) => {
        if (e) {
          setHasConnection(false);
        }
      }); // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Alert />
      <Form />
      {!hasConnection ? (
        <Fragment>
          <ConnectionModal />
          <Notes notes={notes} />
        </Fragment>
      ) : loading && notes.length === 0 ? (
        <Loader />
      ) : (
        <Notes notes={notes} />
      )}
    </Fragment>
  );
};
