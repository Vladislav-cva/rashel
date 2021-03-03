import React from "react";
import "./Clips.scss"

export function ClipsComponent () {
    return(
        <div className="gallery-page">
            <div className="gallery-wrapper">
            <div className="images">
                    < img src="https://np.pl.ua/wp-content/uploads/2020/06/Znimok-ekranu_2020-06-22_09-40-59.png" alt="fon" width="100%" height="100%"/>
            </div>

                <div className="clips">
                                <iframe  className="iframe" src='https://www.youtube.com/embed/SOB48YUcOiU?t=6'
                                    frameBorder='0'
                                    allow='autoplay; encrypted-media'
                                    allowFullScreen
                                    title='video'
                                       
                                />
                                <iframe className="iframe" src='https://www.youtube.com/embed/NNcv7KhrP_k'
                                    frameBorder='0'
                                    allow='autoplay; encrypted-media'
                                    allowFullScreen
                                    title='video'
                                       
                                />
                                <iframe className="iframe" src='https://www.youtube.com/embed/54T1R8iTlhE'
                                    frameBorder='0'
                                    allow='autoplay; encrypted-media'
                                    allowFullScreen
                                    title='video'
                                     
                                />
                                <iframe className="iframe" src='https://www.youtube.com/embed/bpBK7PJxI_k'
                                    frameBorder='0'
                                    allow='autoplay; encrypted-media'
                                    allowFullScreen
                                    title='video'
                                    
                                />
                                <iframe className="iframe" src='https://www.youtube.com/embed/h9KJgJFQNoc'
                                    frameBorder='0'
                                    allow='autoplay; encrypted-media'
                                    allowFullScreen
                                    title='video'
                                     
                                />

                </div>
            </div>
        </div>
    )
}

