import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import style from "./Addlinkmodal.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Addlinkmodal(props) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [url, setURL] = useState("");

  const addLink = () => {
    props.onAddLinkProps(name, url);
    setModal(false);
    setName("");
    setURL("");
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={style.modal}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Adding Link
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={style.body}>
          <label>Name:&nbsp;</label>
          <input
            type="text"
            value={name}
            onChange={(typing) => setName(typing.currentTarget.value)}
          />
          <br />
          <br />
          <label>URL:&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            type="text"
            value={url}
            size="50"
            onChange={(typing) => setURL(typing.currentTarget.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addLink}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Addlinkmodal;
