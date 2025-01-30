import React, { useState, useEffect, useRef } from "react";

interface Banner {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Carousel: React.FC = () => {
  const banners: Banner[] = [
    {
      id: 1,
      title: "Paan Corner",
      description: "Smoking Accessories, Mints & More",
      image: "https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150322012.jpg?semt=ais_hybrid",
    },
    {
      id: 2,
      title: "Fresh Groceries",
      description: "Fresh vegetables & fruits delivered",
      image: "https://www.shutterstock.com/image-vector/banner-announcing-mega-discount-half-260nw-1962489325.jpg",
    },
    {
      id: 3,
      title: "Snacks & Beverages",
      description: "Tasty snacks delivered in minutes",
      image: "https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const intervalRef = useRef<number | null>(null); // Updated type

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(nextSlide, 3000); // Use `window.setInterval`

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const goToSlide = (index: number) => {
    if (intervalRef.current !== null) clearInterval(intervalRef.current); // Stop auto-slide
    setCurrentSlide(index);
    intervalRef.current = window.setInterval(nextSlide, 3000); // Restart auto-slide
  };

  return (
    <div className="mt-2 relative w-[90%] mx-auto overflow-hidden rounded-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="w-full flex-shrink-0"
            style={{
              backgroundImage: `url(${banner.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="h-full w-full flex flex-col justify-center items-start bg-black/50 p-6 text-white">
              <h2 className="text-2xl md:text-4xl font-bold">{banner.title}</h2>
              <p className="mt-2 text-sm md:text-lg">{banner.description}</p>
              <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-200">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
