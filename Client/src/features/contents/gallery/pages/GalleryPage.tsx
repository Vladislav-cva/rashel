import React from "react";
import { MainLayout } from "layout/MainLayout";
import { GalleryContainer } from "../containers/GalleryContainer";


export function GalleryPage() {
    return (
        <MainLayout>
            <GalleryContainer></GalleryContainer>
        </MainLayout>
    )
}