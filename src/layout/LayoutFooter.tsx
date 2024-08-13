import React from 'react';

export default function LayoutFooter() {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-2">
          게임제작: <a href="#" className="text-blue-400 hover:underline">한동환</a>
        </p>
        <p>
          이메일: <a href="#" className="text-blue-400 hover:underline">abc123@naver.com</a>
        </p>
      </div>
    </footer>
  );
}
