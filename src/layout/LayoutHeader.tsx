import React, { useState } from 'react';

export default function HomePage() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const images = [
    { id: 1, title: '1번 사진', description: '1번 사진 설명', link: '/event/1' },
    { id: 2, title: '2번 사진', description: '2번 사진 설명', link: '/event/2' },
    { id: 3, title: '3번 사진', description: '3번 사진 설명', link: '/event/3' },
    { id: 4, title: '4번 사진', description: '4번 사진 설명', link: '/event/4' },
  ];

  const handleImageClick = (id: number) => {
    setActiveImage(id);
  };

  const handleLargeImageClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <div className="bg-gray-100 flex-grow">
      {/* 메인 섹션 */}
      <section className="w-full max-w-7xl bg-gray-200 p-6 my-4 mx-auto">
        {/* 이벤트 섹션 */}
        <div className="bg-pink-200 p-6 rounded-md mb-4 text-center relative">
          <h2 className="text-2xl font-bold mb-4">1번 이벤트 & 사진</h2>

          {activeImage !== null ? (
            <div
              className="bg-pink-300 p-4 rounded-md text-center cursor-pointer"
              onClick={() => handleLargeImageClick(images[activeImage - 1].link)}
            >
              <h3 className="text-xl mb-2">{images[activeImage - 1].title}</h3>
              <p>{images[activeImage - 1].description}</p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="bg-pink-300 p-4 rounded-md text-center cursor-pointer"
                  onClick={() => handleImageClick(image.id)}
                >
                  {image.title}
                </div>
              ))}
            </div>
          )}

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button className="bg-yellow-300 text-xl font-bold px-6 py-2 rounded-full w-36 h-36 flex items-center justify-center">
              Game Start
            </button>
          </div>
        </div>

        {/* 로그인 섹션 */}
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white px-6 py-2 rounded-md">홈 페이지 로그인</button>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-3 py-2 rounded-full">F</button>
            <button className="bg-red-500 text-white px-3 py-2 rounded-full">G</button>
            <button className="bg-green-500 text-white px-3 py-2 rounded-full">N</button>
          </div>
        </div>
      </section>

      {/* 인기 글 섹션 */}
      <section className="w-full max-w-7xl bg-white p-6 my-4 mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">TODAY 인기 글</h3>
            <ul>
              <li className="mb-2">글 제목 1</li>
              <li className="mb-2">글 제목 2</li>
              <li className="mb-2">글 제목 3</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">TODAY 인기 글</h3>
            <ul>
              <li className="mb-2">글 제목 1</li>
              <li className="mb-2">글 제목 2</li>
              <li className="mb-2">글 제목 3</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
