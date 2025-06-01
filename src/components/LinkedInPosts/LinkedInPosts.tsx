import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";

import "./swiper.min.css";
import "./pagination.min.css";
import "./navigation.min.css";
import "./effect-coverflow.min.css";

import "./LinkedInPosts.css";

type Post = {
  summary: string;
  url: string;
  date: string;
  image: string;
};

type LinkedInPostsProps = {
  posts: Post[];
  title: string;  // Title prop
};

export const LinkedInPosts: React.FC<LinkedInPostsProps> = ({ posts, title }) => {
  return (
    <div className="p-4">
      <h2 className="carousel-title">{title}</h2> {/* Title outside Swiper */}
      <Swiper
        modules={[Pagination, Navigation, EffectCoverflow]}
        effect="coverflow"
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={0}
        pagination={{ clickable: true }}
        navigation
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="my-swiper"
      >
        {posts.map((post, index) => (
          <SwiperSlide key={index} className="my-swiper-slide">
            <div className="post-card">
              <div className="post-card-image">
                <img src={`/images/posts/${post.image}`} alt={`Post image`} />
              </div>
              <div className="post-card-content">
                <p className="date">{post.date}</p>
                <p className="summary">{post.summary}</p>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  Leer más en LinkedIn →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

