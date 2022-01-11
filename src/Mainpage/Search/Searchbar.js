import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

export default function Savelink(props) {
  return (
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        size="50"
      ></input>
    </div>
  );
}
