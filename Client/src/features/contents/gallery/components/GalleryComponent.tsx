import React, { useState } from "react";
import "./Gallery.scss";
import f_1 from "../../../../assets/img/IMG_2861.jpg";
import f_2 from "../../../../assets/img/IMG_9333.jpg";
import f_3 from "../../../../assets/img/IMG_9335.jpg";
import f_4 from "../../../../assets/img/IMG_9344.jpg";
import f_5 from "../../../../assets/img/IMG_9345.jpg";
import f_6 from "../../../../assets/img/IMG_9349.jpg";
import f_7 from "../../../../assets/img/IMG_9357.jpg";
import f_8 from "../../../../assets/img/IMG_9361.jpg";

import i_1 from "../../../../assets/img/IMG_9933.jpg";
import i_2 from "../../../../assets/img/IMG_9942.jpg";
import i_3 from "../../../../assets/img/IMG_9945.jpg";
import i_4 from "../../../../assets/img/IMG_9949.jpg";
import i_5 from "../../../../assets/img/IMG_9953.jpg";
import i_6 from "../../../../assets/img/IMG_9956.jpg"


let choose_clip = [f_1, f_2, f_3, f_4, f_5, f_6, f_7, f_8];
let break_into = [i_1, i_2 ,i_3 ,i_4 ,i_5 ,i_6 ]



export function GalleryComponent (){

    const [isImage, setIsImage] = useState(choose_clip[0])
    const [isSecondImage, setIsSecondImage] = useState(break_into[0])

    return(
        <div className="wrapper-page-one">
            <div className="wrapper-content-one">
                <div className="display-one">
                    <div className="main-image">
                        <img src={isImage} alt="sourse" className="image-one"/>
                    </div>
               
                    <div className="container-gallery">
                        {choose_clip.map((item:any, index) => (
                            < img 
                                style={{border: isImage === item? "4px solid #7b8e8d" : ""}}
                                src={item}
                                key={index}
                                alt="logo" 
                                className="display-all-foto" 
                                onClick={()=> setIsImage(item)}
                                />
                        ))}
                    </div>
                </div>
                <div className="display-one">
                    <div className="main-image">
                        <img src={isSecondImage} alt="sourse" className="image-one"/>
                    </div>
               
                    <div className="container-gallery">
                        {break_into.map((item:any, index) => (
                            < img 
                                style={{border: isSecondImage === item? "4px solid #7b8e8d" : ""}}
                                src={item}
                                key={index}
                                alt="logo" 
                                className="display-all-foto" 
                                onClick={()=> setIsSecondImage(item)}
                                />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}