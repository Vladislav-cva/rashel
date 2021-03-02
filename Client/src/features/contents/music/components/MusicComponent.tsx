import React from "react";
import "./musicComponent.scss"

export function MusicComponent () {
    return(
        <div className="music-page">
            <div className="music-content">
                music
                <div className="first-track-content">
                    <img src="" />
                    <audio controls>
                        <source src="https://music.apple.com/ru/album/break-into/1543333339?i=1543333347" type="audio/mpeg"></source>
                    </audio>
                    
                </div>
            </div>
        </div>
    )
}