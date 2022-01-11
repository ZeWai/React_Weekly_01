import style from "./Searchsection.module.css"
import Searchbar from "./Searchbar"
import { Link } from 'react-router-dom';

export default Search =>{
    return(
        <div className={style.right}>
            <div >
            <h3>Search here</h3>
            </div>
            <div style={{display:'inline-block'}}>
            <Searchbar/>
            </div>
        </div>
    )

}