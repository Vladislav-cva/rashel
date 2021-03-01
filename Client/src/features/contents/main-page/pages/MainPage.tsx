import { MainLayout } from "layout/MainLayout";
import React from "react";
import { MainPageContainer } from "../containers/Main-page-Container";


export function MainPage() {
    return (
        <MainLayout>
            <MainPageContainer></MainPageContainer>
        </MainLayout>
    )
}