import React from "react";
import "./News.scss"

export function NewsComponent (){
    return(
        <div className="news-page">
            <div className="news-content">
                <div className="image-fon">
                    < img src="https://novy.tv/wp-content/uploads/sites/96/2021/01/001.jpeg" alt="sourse" width="100%" height='100%' />
                </div>

                <div className="all-content"><h1>Новости</h1></div>
                <div className="news-wrapper">
                    <h1>"Новый" канал о новом треке Rashel</h1>
                    <h2>RASHEL СОВМЕСТНО СО СТАСОМ ШУРИНСОМ ВЫПУСТИЛИ ЛИРИЧЕСКИЙ ТРЕК: СЛУШАЕМ!...
                        <a target="blank" href="https://novy.tv/ru/g-space/showbiznes/2021/03/02/rashel-zi-stasom-shurinsom-vipustili-lirichniy-trek-sluhayemo/">Подробнее: https://novy.tv/ru/g-space/showbiznes/2021/03/02/rashel-zi-stasom-shurinsom-vipustili-lirichniy-trek-sluhayemo/.</a></h2>
                </div>
                <div className="news-wrapper">
                    <h1>Интервью для телеканала "Новый канал"</h1>
                    <h2>Молодая украино-арабская певица Рашель Дауд на днях презентовала свой новый клип на песню Break Into. Видео вышло на официальном аккаунте бельгийского лейбла Fall-up recordings, с которым артистка недавно подписала контракт.  – Дейв (директор лейбла), сам нашёл меня в Instagram и предложил работать вместе. Сказал, что ему понравилось мое творчество и он хотел бы продвигать меня в Европе. У него молодой лейбл, который работает с артистами разных жанров от поп до EDM. У нас было несколько совместных созвонов с командой, после которых мы подписали контракт. И вот уже Break Into можно услышать на европейских радиостанциях. Это удивительно!, – поделилась впечатлениями Рашель. ...
                            Подробнее: <a target="blank" href="https://novy.tv/ru/g-space/showbiznes/2021/01/28/rashel-prezentuvala-debyutniy-klip-na-belgiyskomu-leybli/">https://novy.tv/ru/g-space/showbiznes/2021/01/28/rashel-prezentuvala-debyutniy-klip-na-belgiyskomu-leybli/</a></h2>
                </div>
                <div className="news-wrapper">
                    <h1>Интервью для "WhatUsee"</h1>
                    <h2>Украинская певица Rashel выпустила новый клип, в сотрудничестве с бельгийским лейблом.<a target="blank" href="https://whatusee.com.ua/rashel-vipustila-klip-break-into-s-belgiyskim-leyblom/">Подробнее: https://whatusee.com.ua/rashel-vipustila-klip-break-into-s-belgiyskim-leyblom/</a></h2>
                </div>
            </div>
        </div>
    )
}