import React, { Fragment } from "react";
import { Form } from "../../components/Form/Form";
import { Notes } from "../../components/Notes/Notes";

export const HomePage = () => {
  const notes = new Array(3)
    .fill("")
    .map((_, i) => ({ id: i * i - 4, title: `Note ${i}` }));

  return (
    <Fragment>
      <Form />
      <Notes notes={notes} />
    </Fragment>
  );
};
