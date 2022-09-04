import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <div className="container">
      <h3 className="mb-3">popular foods</h3>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
        }}
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1170: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        <div className="my-5">
          {popular.map((recipe) => (
            <SwiperSlide>
              <Link to={"/recipe/" + recipe.id}>
                <div
                  key={recipe.id}
                  className="card"
                  style={{ width: "16rem", height: "215px" }}
                >
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-text">{recipe.title}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Popular;
