import { MainLayout } from "layout/MainLayout"
import React from "react"
import { ConcertContainer } from "../containers/ConcertContainer"


export function ConcertPage() {
    return (
        <MainLayout>
            <ConcertContainer></ConcertContainer>
        </MainLayout>
    )
}