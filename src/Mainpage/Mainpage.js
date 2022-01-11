import Searchsection from './Search/Secrchsection'
import Addlink from './Addlink/Addlink'
import Savedlink from './Savedlink/Savedlink'
import style from './Mainpage.module.css'

export default function Mainpage() {
    return (
        <div>
            <Addlink/>
            <br></br>
            <Searchsection/>
            <br></br>
            <Savedlink/>
        </div>
    )
}
