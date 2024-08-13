import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/farmend.jpg'; // 로고 이미지를 import 합니다.

export default function LayoutHeader() {
  return (
    <header className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img 
            src={logo}
            alt="Farmend Logo" 
            className="w-24 h-auto"
          />
        </Link>

        <div className="flex space-x-4">
          <Link to="/signup">
            <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition">
              회원가입
            </button>
          </Link>
          <Link to="/login">
            <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition">
              로그인
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
