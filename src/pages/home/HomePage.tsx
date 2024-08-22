import React, { useState } from 'react';
import image1 from '../../assets/image/image1.jpg';
import image2 from '../../assets/image/image2.jpg';
import image3 from '../../assets/image/image3.jpg';
import image4 from '../../assets/image/image4.jpg';

// 슬라이드 사진 데이터
const slideImages = [
  { id: 1, title: '1번 사진', imageUrl: image1 },
  { id: 2, title: '2번 사진', imageUrl: image2 },
  { id: 3, title: '3번 사진', imageUrl: image3 },
  { id: 4, title: '4번 사진', imageUrl: image4 },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideClick = (index: number) => {
    setActiveSlide(index);
  };

  const handleLargeImageClick = () => {
    // 이벤트 페이지로 이동하는 로직 (큰 이미지 클릭 시)
    console.log('이벤트 페이지로 이동');
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* 큰 슬라이드 이미지 섹션 */}
      <div className="relative w-full max-w-screen-lg h-[450px] bg-pink-200 flex justify-center items-center">
        <img 
          src={slideImages[activeSlide].imageUrl} 
          alt={slideImages[activeSlide].title} 
          className="object-cover w-full h-full"
          onClick={handleLargeImageClick}
        />
      </div>

      {/* 슬라이드 카드 + Game Start 버튼 섹션 */}
      <div className="relative flex justify-center items-center -mt-6 space-x-6">
        {/* 왼쪽 슬라이드 카드 */}
        {slideImages.slice(0, 2).map((slide, index) => (
          <div
            key={slide.id}
            className={`w-40 h-24 flex items-center justify-center rounded-md cursor-pointer ${index === activeSlide ? 'bg-pink-400' : 'bg-pink-300'}`}
            onClick={() => handleSlideClick(index)}
          >
            <img 
              src={slide.imageUrl} 
              alt={slide.title} 
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        ))}

        {/* Game Start 버튼 */}
        <button className="bg-yellow-500 text-white text-2xl font-bold w-48 h-48 rounded-full shadow-lg">
          Game Start
        </button>

        {/* 오른쪽 슬라이드 카드 */}
        {slideImages.slice(2, 4).map((slide, index) => (
          <div
            key={slide.id}
            className={`w-40 h-24 flex items-center justify-center rounded-md cursor-pointer ${index + 2 === activeSlide ? 'bg-pink-400' : 'bg-pink-300'}`}
            onClick={() => handleSlideClick(index + 2)}
          >
            <img 
              src={slide.imageUrl} 
              alt={slide.title} 
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        ))}
      </div>

      {/* 로그인 섹션 */}
      <div className="flex justify-center space-x-4 mt-10">
        <button className="bg-black text-white px-6 py-2 rounded">
          홈페이지 로그인
        </button>
        <div className="flex space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">F</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded">G</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">N</button>
        </div>
      </div>
    </div>
  );
}
