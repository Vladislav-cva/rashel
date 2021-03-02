import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InstagramOutlined } from "@ant-design/icons";
import "./Header.scss";

interface MenuItems {
    isActive: boolean;
    name: string;
    route: string;
}

const NAV_MENU_ITEMS: MenuItems[] = [
    {
        isActive: true,
        name: 'BIO',
        route: '/main',
        
    },
    {
        isActive: false,
        name: 'Music',
        route: '/music',
    },
    {
        isActive: false,
        name: "Clips",
        route: '/clips',
    },
    {
        isActive: false,
        name: "News",
        route: '/news',
    },
    {
        isActive: false,
        name: "Gallery",
        route: '/gallery',
    },
    {
        isActive: false,
        name: "Contacts",
        route: "/contacts"
    }
]


export function Header() {

    const [isItem, setIsItem] = useState(NAV_MENU_ITEMS)

    const redirectToLogs = (item: MenuItems) => {
    const newItem = isItem.map((itemMenu: MenuItems) => {
        if(item.name !== itemMenu.name){
            itemMenu.isActive = false;
        } else {
            itemMenu.isActive = true;
        }
        return itemMenu;
    })
    setIsItem(newItem)
}


    return (
        <header className="header" >
            <div className="header-content" >
                <div className="info-content">
                    <ul>
                        <li><button> <a target="blank" href="https://instagram.com/rashel_daud?igshid=abn9vway5j1w" ><InstagramOutlined style={{ fontSize: '30px', color: "#ffffff"} }/> </a></button> </li>
                        <li className="artist-name"><p>Rashel</p> </li>
                    </ul>
                </div>
                <div className="menu-route">
                    <ul className="nav-menu">
                        {
                            isItem.map((item: MenuItems)=> (
                                <li className={item.isActive? 'list-page active': 'list-page'} onClick={()=>redirectToLogs(item)}><NavLink to={item.route}>{item.name}</NavLink></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}


 {/* >
                    <li><NavLink to="/main">BIO</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/concerts">Concerts</NavLink></li>
<li id="contacts_route"><NavLink to="">Contacts</NavLink></li> */}