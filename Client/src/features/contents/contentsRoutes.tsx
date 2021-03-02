import React from "react";
import { Route } from "react-router";
import { GalleryPage } from "./gallery/pages/GalleryPage";
import { ContactsPage } from "./contacts/pages/ContactsPage";
import {  GALLERY_URL, CONTACTS_URL, CLIPS_URL, MAIN_PAGE_URL, MUSIC_URL, NEWS_URL } from "./contentsUrls";
import { ClipsPage } from "./clips/pages/ClipsPage";
import { MainPage } from "./main-page/pages/MainPage";
import { MusicPage } from "./music/pages/MusicPage";
import { NewsPage } from "./news/pages/NewsPage";

export const ContentsRoutes = [
    <Route key="main" path={MAIN_PAGE_URL.urlTemplate} component={MainPage} />,
    <Route key="clips" path={CLIPS_URL.urlTemplate} component={ClipsPage} />,
    <Route key="music" path={MUSIC_URL.urlTemplate} component={MusicPage} />,
    <Route key="contacts" path={CONTACTS_URL.urlTemplate} component={ContactsPage} />,
    <Route key="galley" path={GALLERY_URL.urlTemplate} component={GalleryPage} />,
    <Route key="news" path={NEWS_URL.urlTemplate} component={NewsPage} />
]