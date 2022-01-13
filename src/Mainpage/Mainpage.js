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
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState("");
    const onSearchBarChange = (search) => {
        setSearch(search);
    };

    const onAddButtonAddLink = (name, url, id) => {
        setCount(count + 1);
        id = count + 1;
        const newLinks = [
            {
                name,
                url,
                id
            },
        ].concat(links);
        setLinks(newLinks);
        localStorage.setItem("links", JSON.stringify(newLinks));
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

    const removeLink = (id) => {
        let newObj = [...links];
        newObj.splice(id, 1);
        setLinks(newObj);
        localStorage.setItem("links", JSON.stringify(newObj));
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
            <Savedlink links={filteredLinks(search)} remove={(id) => removeLink(id)} />
        </div>
    );
}
