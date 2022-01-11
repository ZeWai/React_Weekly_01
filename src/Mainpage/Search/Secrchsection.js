import style from "./Searchsection.module.css"
import Searchbar from "./Searchbar/Searchbar"
import { Link } from 'react-router-dom';

export default Search =>{
    return(
        <div className={style.searchsection}>
            <div>
            <Searchbar/>
            </div>
        </div>
    )

}