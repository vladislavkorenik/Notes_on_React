import React, { Fragment } from "react";
import { Form } from "../../components/Form/Form";
import { Notes } from "../../components/Notes/Notes";
import { Alert } from "../../components/Alert/Alert";

export const HomePage = () => {
  const notes = new Array(3)
    .fill("")
    .map((_, i) => ({ id: i * i - 4, title: `Note ${i}` }));

  return (
    <Fragment>
      <Alert />
      <Form />
      <Notes notes={notes} />
    </Fragment>
  );
};
