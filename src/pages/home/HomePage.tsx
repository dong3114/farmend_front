import React from 'react';

// TypeScript 타입 선언
interface TitleProps {
  number: number;
}

interface IconButtonProps {
  icon: string;
}

// HomePage 컴포넌트
export default function HomePage() {
  return (
    <div className="w-full">
      {/* Main Event Section */}
      <div className="bg-pink-100 h-64 mb-16 flex items-center justify-center text-xl font-semibold text-gray-700 relative w-full">
        <span>1번 이벤트 & 사진</span>
        
        {/* Game Start Button */}
        <button className="bg-yellow-500 text-white text-xl font-bold w-40 h-40 rounded-full shadow-lg absolute left-1/2 transform -translate-x-1/2 -bottom-14 translate-y-1/2 z-20">
          Game Start
        </button>
      </div>

      {/* Titles Section */}
      <div className="relative flex justify-between items-end mb-4 space-x-4 -mt-10">
        <Title number={1} />
        <Title number={2} />
        <Title number={3} />
        <Title number={4} />
      </div>

      {/* Login Section */}
      <div className="flex justify-end">
        <div className="flex flex-col items-end space-y-2">
          <button className="bg-black text-white px-4 py-2 rounded mb-2">
            홈 페이지 로그인
          </button>
          <div className="flex space-x-2">
            <IconButton icon="facebook" />
            <IconButton icon="google" />
            <IconButton icon="naver" />
            <IconButton icon="kakao" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Title 컴포넌트
function Title({ number }: TitleProps) {
  return (
    <div className="bg-pink-100 h-20 flex-grow mx-2 flex flex-col items-center justify-center text-sm text-gray-600">
      <span>{number}번 사진</span>
    </div>
  );
}

// IconButton 컴포넌트
function IconButton({ icon }: IconButtonProps) {
  return (
    <button className="bg-white rounded-full p-2 shadow-lg">
      <img
        src={`/${icon}.svg`} // You'll need to have these SVG files in your public folder or modify the path accordingly
        alt={`${icon} icon`}
        className="w-6 h-6"
      />
    </button>
  );
}
