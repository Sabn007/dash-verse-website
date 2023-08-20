"use client";
import React, { useState } from "react";
import Image from "next/image";

const BannerPage: React.FC = () => {
  const bannerImages = [
    {
      path: "/banner.jpg",
      title: "Software Development",
      description:
        "Creating stunning and user-centric websites for seamless experiences.",
    },
    {
      path: "/digital.jpg",
      title: "Affortable digital marketing services",
      description:
        "Crafting tailored strategies to engage customers and drive conversions",
    },
    {
      path: "/web.jpg",
      title: "Website",
      description:
        "Optimizing your online presence to attract organic traffic and enhance visibility.",
    },
    {
      path: "/graphic.jpg",
      title: "Designing",
      description:
        "Bringing your brand's narrative to life through captivating visuals.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1
    );
  };
  const currentImage = bannerImages[currentIndex];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 p-8">
        <div className="relative w-full">
          <Image
            src={currentImage.path}
            alt={currentImage.description}
            width={1200}
            height={500}
            objectFit="cover"
            className="rounded-md"
          />

          <div className="absolute left-4 bottom-4 text-left">
            <span>
              {currentIndex + 1}/{bannerImages.length}
            </span>
            <button
              className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-md mx-2"
              onClick={goToPrevImage}
            >
              {"<"}
            </button>
            <button
              className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-md"
              onClick={goToNextImage}
            >
              {">"}
            </button>
          </div>
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <h1 className="text-white font-bold text-4xl">
              {currentImage.title}
            </h1>
            <p className="text-lg font-semibold text-white bg-black bg-opacity-50 p-2 rounded-md">
              {currentImage.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
