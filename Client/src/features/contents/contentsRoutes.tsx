import React from "react";
import { Route } from "react-router";
import { ConcertPage } from "./concerts/pages/ConcertPage";
import { ContactsPage } from "./contacts/pages/ContactsPage";
import {  CONCERT_URL, CONTACTS_URL, GALLERY_URL, MAIN_PAGE_URL, MUSIC_URL, NEWS_URL } from "./contentsUrls";
import { GalleryPage } from "./gallery/pages/GalleryPage";
import { MainPage } from "./main-page/pages/MainPage";
import { MusicPage } from "./music/pages/MusicPage";
import { NewsPage } from "./news/pages/NewsPage";

export const ContentsRoutes = [
    <Route key="main" path={MAIN_PAGE_URL.urlTemplate} component={MainPage} />,
    <Route key="gallery" path={GALLERY_URL.urlTemplate} component={GalleryPage} />,
    <Route key="music" path={MUSIC_URL.urlTemplate} component={MusicPage} />,
    <Route key="contacts" path={CONTACTS_URL.urlTemplate} component={ContactsPage} />,
    <Route key="concerts" path={CONCERT_URL.urlTemplate} component={ConcertPage} />,
    <Route key="news" path={NEWS_URL.urlTemplate} component={NewsPage} />
]