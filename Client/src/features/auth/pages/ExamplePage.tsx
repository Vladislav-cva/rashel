import { MainLayout } from "layout/MainLayout";
import React from "react";

import { ExampleFormContainer } from "../containers/ExampleFormContainer";

interface ExamplePageProps { }

export function ExamplePage({ }: ExamplePageProps) {
    return (
        <MainLayout>
            <ExampleFormContainer></ExampleFormContainer>
        </MainLayout>
    )
}