import React from 'react';
import LayoutHeader from './LayoutHeader';  // Header 컴포넌트 import
import LayoutFooter from './LayoutFooter';  // Footer 컴포넌트 import

interface LayoutDefaultProps {
  children: React.ReactNode;  // 본문 내용을 받는 props 정의
}

export default function LayoutDefault({ children }: LayoutDefaultProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <LayoutHeader />
      </div>
      <div className="flex-grow container mx-auto p-4">
        {children}
      </div>
      <div>
        <LayoutFooter />
      </div>
    </div>
  );
}
