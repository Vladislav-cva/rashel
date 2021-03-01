import React from "react";
import { MainLayout } from "layout/MainLayout";
import { ContactsContainer } from "../containers/ContactsContainer";


export function ContactsPage() {
    return (
        <MainLayout>
            <ContactsContainer></ContactsContainer>
        </MainLayout>
    )
}