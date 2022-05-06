import React, { useState } from 'react';

export const FindButton: React.FC = () => {
  const [total, setTotal] = useState(0);

  const handleClick = () => {
    setTotal(total + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center pl-3 mt-6">
      <button
        className="border-2 border-green-600 rounded-md p-3 font-medium text-green-600 w-60"
        onClick={handleClick}
      >
        우리 매장에 맞는 원두 찾아보기
      </button>
      <div className="m-2 italic text-slate-500	">
        지금까지 {total}명이 매장에 꼭 맞는 원두를 찾았어요!
      </div>
    </div>
  );
};
