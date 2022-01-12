import Searchsection from "./Search/Secrchsection";
import Addlink from "./Addlink/Addlink";
import Savedlink from "./Savedlink/Savedlink";
import style from "./Mainpage.module.css";
import img from "./logo.png";
import { useState } from "react";

export default function Mainpage() {
    const storedLinks = localStorage.getItem("links");
    const parsedLinks =
        storedLinks === "" || storedLinks === null ? [] : JSON.parse(storedLinks);

    const [links, setLinks] = useState(
        Array.isArray(parsedLinks) ? parsedLinks : []
    );

    const [search, setSearch] = useState("");
    const onSearchBarChange = (search) => {
        setSearch(search);
    };

    const filteredLinks = (search) => {
        const lowerSearch = search.toLowerCase();
        return links.filter((link) => {
            return (
                link.name.toLowerCase().indexOf(lowerSearch) > -1 ||
                link.url.toLowerCase().indexOf(lowerSearch) > -1
            );
        });
    };
    const onAddButtonAddLink = (name, url) => {
        const newLinks = [
            {
                name,
                url,
            },
        ].concat(links);
        setLinks(newLinks);
        localStorage.setItem("links", JSON.stringify(newLinks));
    };

    return (
        <div>
            <div className={style.body}>
                <div className={style.logo}>
                    <img src={img} className={style.img} alt='logo' />
                </div>
            </div>
            <div className={style.body}>
                <h1 className={style.heading}>React Weekly - Save Link</h1>
            </div>
            <Addlink onAddLinkProps={onAddButtonAddLink} />
            <br></br>
            <Searchsection onSearchChangeProp={onSearchBarChange} />
            <br></br>
            <Savedlink links={filteredLinks(search)} />
        </div>
    );
}
