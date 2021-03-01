import React from 'react';
import { Header } from 'shared/Header/Header';
import "./MainLayout.scss";


export interface MainLayoutProps {
    children: React.ReactChild | React.ReactChild[];
}

export function MainLayout({ children }: MainLayoutProps) {

   
    return (
        <div className="main-layout">
            <div className="layout-wrapper">
                <Header  />
               
                <main className="content" onClick={() => console.log('hi')} >
                  
                    
                    {children}

                </main>
            </div>
        </div>
    );
}
