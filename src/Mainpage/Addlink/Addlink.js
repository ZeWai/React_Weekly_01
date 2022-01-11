import style from "./Addlink.module.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Addlinkmodal from "./Modal/Addlinkmodal";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Addlink(props) {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);
  const [url, setURL] = useState("");
  const storedLinks = localStorage.getItem("links");
  const parsedLinks =
    storedLinks === "" || storedLinks === null ? [] : JSON.parse(storedLinks);
  const [links, setLinks] = useState(
    Array.isArray(parsedLinks) ? parsedLinks : []
  );

  const onAddButtonAddLink = (name, url) => {
    const newLinks = links.concat([
      {
        name,
        url,
      },
    ]);

    setLinks(newLinks);
    localStorage.setItem("links", JSON.stringify(newLinks));
  };
  //   const addLink = () => {
  //     props.onAddLinkProps(name, url, tags);
  //     setModal(false);
  //     setName("");
  //     setURL("");
  //     setTags([]);
  //   };

  return (
    <div className={style.left}>
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        onAddLinkProps={onAddButtonAddLink}
      >
        Add Link
      </Button>
      <Addlinkmodal show={modalShow} onHide={handleClose} />
    </div>
  );
}
