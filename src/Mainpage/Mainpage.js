import Searchsection from './Search/Secrchsection'
import Addlink from './Addlink/Addlink'
import Savedlink from './Savedlink/Savedlink'
import style from './Mainpage.module.css'
import img from './logo.png'

export default function Mainpage() {
    return (
      <div>
        <div className={style.body}>
          <div className={style.drop}>
            <img src={img} className={style.img} />
          </div>
        </div>
        <div className={style.body}>
          <h1 className={style.heading}>React Weekly - Save Link</h1>
        </div>
        <Addlink />
        <br></br>
        <Searchsection />
        <br></br>
        <Savedlink />
      </div>
    );
}
