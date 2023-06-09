import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import review from './reviewsData';

const Review = () => {
  return (
    <>
      <Swiper
        direction="horizontal"
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          disableOnInteraction: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="customeSwiper"
      >
        {review.map((people, idx) => {
          return (
            <SwiperSlide key={people.id}>
              <div className="swipe-container">
                <img src={people.image} />
                <div className="top-left">"{people.text}"</div>
                <div className="bottom-right">- {people.name}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Review;
