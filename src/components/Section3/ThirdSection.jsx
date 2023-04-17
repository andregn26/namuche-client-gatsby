import React from "react";
import WidthCenterContainer from "../HelpersComponents/Containers/WidthCenterContainer";
import PaddingContainer from "../HelpersComponents/Containers/PaddingContainer";
import Beeq from "../../assets/img/beeq.png";
import Famel from "../../assets/img/famel.png";
import Garcias from "../../assets/img/garcias.png";
import Iot4 from "../../assets/img/iot4.png";
import Mudey from "../../assets/img/mudey.png";
import Urbanos from "../../assets/img/urbanos.png";
import OhMySnack from "../../assets/img/oh-my-snacks.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

const slides = [
	{
		index: 1,
		image: Beeq,
	},
	{
		index: 2,
		image: Famel,
	},
	{
		index: 3,
		image: Garcias,
	},
	{
		index: 4,
		image: Iot4,
	},
	{
		index: 5,
		image: Mudey,
	},
	{
		index: 6,
		image: Urbanos,
	},
	{
		index: 7,
		image: OhMySnack,
	},
];

const ThirdSection = () => {
	return (
		<div>
			<WidthCenterContainer>
				<PaddingContainer sx={{ paddingBottom: 0 }}>
					<Swiper
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
							stopOnLastSlide: false,
						}}
						speed={500}
						loop={true}
						slidesPerView={1}
						spaceBetween={10}
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 40,
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 50,
							},
						}}
						modules={[Autoplay]}
						className="mySwiper"
					>
						{slides.map((slide) => (
							<SwiperSlide key={slide.index}>
								<img
									src={slide.image}
									alt={`slide-img-${slide.index}`}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</PaddingContainer>
			</WidthCenterContainer>
		</div>
	);
};

export default ThirdSection;
