import { MainLayout } from "layout/MainLayout"
import React from "react"
import { GalleryContainer } from "../containers/GalleryContainer"



export function GalleryPage() {
    return (
        <MainLayout>
            <GalleryContainer></GalleryContainer>
        </MainLayout>
    )
}