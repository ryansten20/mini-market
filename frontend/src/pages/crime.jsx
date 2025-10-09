import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./crime.css";
import home from "../assets/crime.jpg";

export default function Crime() {
    const carouselImages = [home];

    const VIDs = [
        "0nKftIRQ92w",
        "jlJPnElXKM0",
        "ZqHsuM07hXk",
        "mfVdeuzV-Ys",
        "J18K3ig-Rn0",
        "PhVs14QmJdY"
    ];

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    return (
        <div className="page">
            <div className="carousel">
                <Slider {...settings}>
                    {carouselImages.map((img, i) => (
                        <div key={i}>
                            <div className="overtext">
                                <h1>Crime Video</h1>
                            </div>
                            <img src={img} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="video-grid">
                {VIDs.map((video, i) => (
                    <div className="video-box" key={i}>
                        <iframe
                            src={`https://www.youtube.com/embed/${video}?rel=0&modestbranding=1`}
                            title={`YouTube video ${i + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
}
