import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Addlink.module.css";
import isURL from 'validator/lib/isURL';

export default function Addlink(props) {
    const [errorMessage, setErrorMessage] = useState('')
    const [error, setError] = useState('')
    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");
    const [url, setURL] = useState("");
    const modalClose = () => setModal(false);

    const addLink = () => {
        if (isURL(url)) {
            props.onAddLinkProps(name, url);
            setModal(false);
            setName("");
            setURL("");
        } else {
            setError('Please try again')
        }
    };

    const validate = (e) => {
        setURL(e.target.value);
        if (e.target.value === '') {
            setErrorMessage('');
        } else
            if (isURL(url)) {
                setErrorMessage('Valid URL');
            } else {
                setErrorMessage('Invalid URL');
            }
    };

    const EnterPress = (e) => {
        if (e.key === 'Enter') {
            addLink();
        }
    }
    return (
        <div
            className={style.addlink}>
            <Button
                onClick={() => {
                    setModal(!modal);
                }}
                className={style.button}
            >
                Add Link
            </Button>
            <Modal show={modal} onHide={modalClose} centered size="lg" >
                <Modal.Header class={style.header}>Add Link</Modal.Header>
                <Modal.Body>
                    <label>Name:</label>
                    <br />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                    <br />
                    <label>URL:</label>
                    <br />
                    <input
                        type="text"
                        value={url}
                        onChange={validate}
                        onKeyPress={EnterPress}
                    />
                    <br />
                    <span>{errorMessage}</span>
                    <br />
                </Modal.Body>
                <Modal.Footer>
                    <span>{error}</span>
                    <Button variant="primary" onClick={addLink}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
