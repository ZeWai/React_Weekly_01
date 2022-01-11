import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import style from "./Searchbar.module.css";

export default function Savelink(props) {
  return (
    <div className={style.searchbar}>
      <div className={style.beforeshadow} />
      <div className={style.shadow} />
      <div className={style.beforeinput} />
      <input type="text" placeholder="Search here" className={style.input} />
      <FontAwesomeIcon icon={faSearch} className={ style.icon}/>
      <div className={style.afterinput} />
    </div>
  );
}
