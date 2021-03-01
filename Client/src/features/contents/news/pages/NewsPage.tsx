import React from "react";
import { MainLayout } from "layout/MainLayout";
import { NewsContainer } from "../containers/NewsContainer";


export function NewsPage() {
    return (
        <MainLayout>
            <NewsContainer></NewsContainer>
        </MainLayout>
    )
}