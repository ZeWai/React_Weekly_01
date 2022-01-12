import { useState } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
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
                setErrorMessage('');
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
        <div className={style.addlink}>
            <Button
                onClick={() => {
                    setModal(!modal);
                }}
                className={style.button}
            >
                Add Link
            </Button>
            <Modal show={modal} onHide={modalClose} centered size="lg">
                <Modal.Header className={style.modalhearder}>
                    Saving Link
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <label>Name:</label>
                            <br />
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.currentTarget.value)}
                                size='35'
                            />
                        </Col>
                        <Col>
                            <label>URL:</label>
                            <br />
                            <input
                                type="text"
                                value={url}
                                onChange={validate}
                                onKeyPress={EnterPress}
                                size='35'
                            />
                            <br />
                            <span className={style.errorMessage}>{errorMessage}</span>
                            <br />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <span>{error}</span>
                    <Button variant="primary" onClick={addLink} className={style.modalbutton}> 
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
