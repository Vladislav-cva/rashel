import React from "react";
import { MainLayout } from "layout/MainLayout";
import { MusicContainer } from "../containers/MusicContainer";


export function MusicPage() {
    return (
        <MainLayout>
            <MusicContainer></MusicContainer>
        </MainLayout>
    )
}