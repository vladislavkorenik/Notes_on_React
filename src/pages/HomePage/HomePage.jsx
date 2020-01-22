import React, { Fragment, useContext, useEffect } from "react";
import { Form } from "../../components/Form/Form";
import { Notes } from "../../components/Notes/Notes";
import { Alert } from "../../components/Alert/Alert";
import { FirebaseContext } from "../../context/firebase/firebaseContext";
import { Loader } from "../../components/Loader/Loader";

export const HomePage = () => {
  const { loading, notes, fetchNotes } = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes(); // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Alert />
      <Form />
      {loading && notes.length===0 ? <Loader /> : <Notes notes={notes} />}
    </Fragment>
  );
};
