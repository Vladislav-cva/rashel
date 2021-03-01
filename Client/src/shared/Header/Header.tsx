import React from 'react';
import { NavLink } from 'react-router-dom';
import { InstagramOutlined } from "@ant-design/icons";
import "./Header.scss";


export function Header() {


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
                    <li><NavLink to="/main">BIO</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/concerts">Concerts</NavLink></li>
                    <li id="contacts_route"><NavLink to="">Contacts</NavLink></li>
                </ul>
                </div>
            </div>
        </header>
    )
}
