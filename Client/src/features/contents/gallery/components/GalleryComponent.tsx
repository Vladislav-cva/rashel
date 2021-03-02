import React from "react";
import "./Gallery.scss";
import f_1 from "../../../../assets/img/IMG_2861.jpg";
import f_2 from "../../../../assets/img/IMG_9333.jpg";
import f_3 from "../../../../assets/img/IMG_9335.jpg";


let gall = [
    f_1,
    f_2,
    f_3
    ]


export function GalleryComponent (){
    return(
        <div className="wrapper-page-one">
            <div className="wrapper-content-one">
                <div>
                    {gall.map((i:any) => (
                        < img src={i} alt="logo" />
                    ))}
                </div>
                <div>
                
                </div>
            </div>
        </div>
    )
}