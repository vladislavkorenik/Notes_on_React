import React, { useState } from "react";
import { createModalStyles } from "../../consts/createModalStyles";

export const ConnectionModal = () => {
  const [valueOfAcceptModalDisplay, setValueOfAcceptModalDisplay] = useState(
    "block"
  );
  const ModalDisplay = createModalStyles(valueOfAcceptModalDisplay);

  const closeModal = () => {
    setValueOfAcceptModalDisplay("none");
  };

  return (
    <div style={ModalDisplay} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Now we can’t connect to the server, but you can still use the app
          </h5>
          <button
            onClick={() => closeModal()}
            type="button"
            className="close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
