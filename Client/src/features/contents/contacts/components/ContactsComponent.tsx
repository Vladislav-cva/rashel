import React from "react";
import "./Contacts.scss"

export function ContactsComponent() {
    return(
        <div className="wrapper-page-contacts">
            <div className="contacts-page-one">
                <div className="contacts-content">
                    <h1>Контакты</h1>
                    <h3>Менеджмент</h3>
                    <p>Антон Васильев</p>
                    <p>number</p>
                    <h3>PR</h3>
                    <p>Ксения</p>
                    <p>number</p>
                    <p>test@gmail.com</p>

                </div>
            </div>
        </div>
    )
}