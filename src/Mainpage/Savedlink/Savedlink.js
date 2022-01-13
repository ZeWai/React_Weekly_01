import style from "./Savedlink.module.css";

export default function Savedlink(props) {
    return (
        <div className={style.savedlist}>
            {props.links && props.links.length > 0
                ? props.links.map((link, index) => (
                    <div key={link.id} className={style.link}>
                        <div className={style.result} onClick={() => window.location.href = 'http://' + link.url}>
                            <p className={style.linkname}> {link.name}
                                <br />
                                <span className={style.linkurl}>{link.url}</span>
                            </p>
                        </div>
                        <div className={style.btn} key={link.name + link.id} onClick={() => props.remove(index)}>
                            <span >Delete</span>
                        </div>
                    </div>
                ))
                : <div style={{ cursor: 'default' }}> No link was found. Please add link or change keyword.</div>
            }
        </div >
    );
}
