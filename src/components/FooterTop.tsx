import React from "react";

const FooterTop: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white text-xs py-1.5 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        <span className="mx-4">Разом сильніші. Разом за зміни.</span>
        <span className="mx-4">Думай глобально – дій локально.</span>
        <span className="mx-4">Твій голос. Твій вибір. Твоя сила.</span>
        <span className="mx-4">Лідери сьогодення – архітектори завтра.</span>
        <span className="mx-4">Творимо майбутнє своїми руками.</span>
        <span className="mx-4">Разом сильніші. Разом за змін.</span>
        <span className="mx-4">Думай глобально, дій локально.</span>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FooterTop;
