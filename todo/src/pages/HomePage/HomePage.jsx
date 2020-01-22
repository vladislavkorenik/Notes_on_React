import React, { Fragment, useContext } from "react";
import { Form } from "../../components/Form/Form";
import { Notes } from "../../components/Notes/Notes";
import { Alert } from "../../components/Alert/Alert";
import { FirebaseContext } from "../../context/firebase/firebaseContext";

export const HomePage = () => {
  const { loading, notes, fetchNotes } = useContext(FirebaseContext);

  return (
    <Fragment>
      <Alert />
      <Form />
      <Notes notes={notes} />
    </Fragment>
  );
};
