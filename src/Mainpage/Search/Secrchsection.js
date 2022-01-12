import style from "./Searchsection.module.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search(props) {
    const [search, setSearch] = useState("");

    const onSearchChangeLocal = (e) => {
        const newSearch = e.currentTarget.value;
        setSearch(newSearch);
        props.onSearchChangeProp(newSearch);
    };
    return (
        <div className={style.searchsection}>
            <div>
                <div className={style.searchbar}>
                    <div className={style.beforeshadow} />
                    <div className={style.shadow} />
                    <div className={style.beforeinput} />
                    <input type="text" placeholder="Search here" className={style.input} onChange={onSearchChangeLocal} value={search} />
                    <FontAwesomeIcon icon={faSearch} className={style.icon} />
                    <div className={style.afterinput} />
                </div>
            </div>
        </div>
    )

}