import { useDispatch, useSelector } from "react-redux";
import React, { Fragment, useEffect, useState } from "react";

import { Form } from "../../components/Form/Form";
import { Notes } from "../../components/Notes/Notes";
import { Alert } from "../../components/Alert/Alert";
import { Loader } from "../../components/Loader/Loader";
import { ConnectionModal } from "../../components/ConnectionModal/ConnectionModal";
import { clearIndexDB, getDataFromIndexDB } from "../../logic/indexDB";
import {
  hideLoader,
  showLoader,
} from "../../store/actionCreators/loaderActionCreators";
import { fetchNotes } from "../../store/actionCreators/firebaseActionCreators";

const url = "https://react-todo-9fb46.firebaseio.com";

export const HomePage = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.firebaseReducer.notes);
  const loading = useSelector((state) => state.loaderReducer.loading);

  let [hasConnection, setHasConnection] = useState(true);
  const sendData = async (note) => {
    await fetch("https://react-todo-9fb46.firebaseio.com/notes.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(note),
    });
  };

  const fetchFirebaseNotes = async () => {
    dispatch(showLoader());

    const response = await fetch(`${url}/notes.json`);
    const res = await response.json();

    if (res === null) {
      dispatch(hideLoader());
      return 0;
    }
    const payload = Object.keys(res).map((key) => {
      return {
        ...res[key],
        id: key,
      };
    });

    dispatch(fetchNotes(payload));
  };

  useEffect(() => {
    navigator.onLine
      ? fetchFirebaseNotes().then(() => {
          getDataFromIndexDB().forEach((note) => {
            sendData(note).then();
          });

          dispatch(hideLoader());
          clearIndexDB();
        })
      : setHasConnection(false);
  }, []);

  return (
    <Fragment>
      <Alert />
      <Form url={url} />
      {!hasConnection ? (
        <Fragment>
          <ConnectionModal />
          <Notes notes={notes} />
        </Fragment>
      ) : loading ? (
        <Loader />
      ) : (
        <Notes notes={notes} />
      )}
    </Fragment>
  );
};
