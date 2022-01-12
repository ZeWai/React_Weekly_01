import style from "./Savedlink.module.css";

export default function Savedlink(props) {

    return (
        <div className={style.savedlist}>
            <>
                {props.links && props.links.length > 0
                    ? props.links.map((link, i) => (
                        <div key={i} className={style.link}>
                            <div className={style.result} onClick={() => window.location.href = 'http://' + link.url}>
                                <p className={style.linkname}> {link.name}
                                    <p className={style.linkurl}>{link.url}</p>
                                </p>
                            </div>
                        </div>
                    ))
                    : <div> No link was found. Please add or change keyword</div>
                }
            </>
        </div >
    );
}
