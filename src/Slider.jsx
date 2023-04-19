import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Box, Image } from "@chakra-ui/react";

function Carousel() {
  const images = [
    "https://ik.imagekit.io/5if8ukbxw/images/14418478_max.jpg?updatedAt=1681748289106",
    "https://ik.imagekit.io/5if8ukbxw/images/81sZaS6kcmL._SL1500_.jpg?updatedAt=1681748335226",
    "https://ik.imagekit.io/5if8ukbxw/images/MV5BMTUyNjE5NjI5OF5BMl5BanBnXkFtZTgwNzYzMzU3NjE_._V1_.jpg?updatedAt=1681748372279",
    "https://ik.imagekit.io/5if8ukbxw/images/pathaan21669878743.jpg?updatedAt=1681748817608",
  ];

  return (
    <Box maxWidth="800px" mx="auto">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <Image src={image} alt={`Carousel slide ${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
export default Carousel;