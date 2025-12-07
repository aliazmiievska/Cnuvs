import React from "react";
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import QR from "../assets/images/QR.png";

interface Props {
  onClose: () => void;
  onSuccess: (token: string) => void;
}

const AuthModal: React.FC<Props> = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(150);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: any) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.73)] flex items-center justify-center z-50">
      <div className="bg-neutral-100 p-4 rounded-2xl w-120 text-center flex flex-col">
        <div className="relative flex gap-2">
          <button
            onClick={() => {
              setIsOpen(false);
              onClose();
            }}
            className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} color="black" className="hover:cursor-pointer"/>
          </button>
        </div>

        <h2 className="text-lg text-black mb-1 mt-8">
          Вхід за допомогою застосунку
        </h2>
        <p className="text-lg text-black mb-4">
          Мій Студент
        </p>

        <p className="text-black text-xs mb-3">
          Відскануйте QR за допомогою камери або сканеру в застосунку
        </p>
        <img
          src={QR}
          alt="Anton"
          className="self-center w-50 object-contain mb-2"
        />
        <p className="text-black text-md">
          Код діятиме <span className="font-semibold">{formatTime(timeLeft)} секунд</span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;



// return (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//     <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 relative">
//       <button
//         onClick={() => setIsOpen(false)}
//         className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//       >
//         <X size={24} />
//       </button>

//       <div className="text-center">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//           Вхід за допомогою застосунку
//         </h2>
//         <p className="text-xl text-gray-700 mb-6">
//           Мій Студент
//         </p>

//         <p className="text-gray-600 mb-8">
//           Відскануйте QR за допомогою камери або сканеру в застосунку
//         </p>

//         <div className="flex justify-center mb-6">
//           <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
//             <div className="w-48 h-48 bg-white">
//               <svg viewBox="0 0 29 29" className="w-full h-full">
//                 <rect width="29" height="29" fill="white" />
//                 <path d="M0,0h7v7h-7v-7zm8,0h1v1h1v1h-2v-2zm2,0h3v1h1v-1h1v1h-1v1h1v1h-1v1h1v2h-2v-1h-1v-1h-1v-1h1v-2h-2v-1zm5,0h1v2h-1v-2zm2,0h1v1h-1v-1zm2,0h7v7h-7v-7zm-20,1v5h5v-5h-5zm8,0h1v2h-2v-1h1v-1zm4,0v1h-1v1h-1v-2h2zm8,0v5h5v-5h-5zm-19,1v3h3v-3h-3zm20,0v3h3v-3h-3zm-11,2h1v1h-1v-1zm-2,1h1v2h-2v-1h1v-1zm11,0h1v1h-1v-1zm-18,1v1h-1v1h-1v-2h2zm7,0h1v1h-1v-1zm2,0h1v1h-1v-1zm6,0h1v1h-1v-1zm-16,1h1v1h-1v-1zm4,0h1v1h1v1h-1v1h-2v-2h1v-1zm4,0h2v1h-1v1h-1v-2zm3,0h2v1h-2v-1zm4,0h1v1h-1v-1zm3,0h1v1h-1v-1zm-20,1h2v1h-2v-1zm17,0h1v1h1v-1h1v2h-3v-1zm-9,1h1v1h-1v-1zm2,0h1v1h-1v-1zm2,0h1v1h2v1h-1v1h-1v-1h-1v-2zm4,0h1v1h-1v-1zm-11,1h1v1h-1v-1zm3,0h1v2h-1v1h-1v-3h1zm8,0h1v1h-1v-1zm-19,1h1v1h-1v-1zm2,0h1v1h1v1h-2v-2zm3,0h1v1h-1v-1zm4,0h1v3h-1v1h-1v-2h1v-2zm6,0h1v1h-1v-1zm4,0h1v1h-1v-1zm-16,1h2v1h-1v1h-1v-2zm3,0h1v1h-1v-1zm5,0h1v1h-1v-1zm3,0h1v1h-1v-1zm-13,1h1v1h-1v-1zm11,0h1v1h-1v-1zm7,0h2v1h-2v-1zm-19,1h1v1h-1v-1zm2,0h1v1h1v1h-2v-2zm3,0h1v1h-1v-1zm2,0h1v3h-1v-3zm5,0h1v1h-1v-1zm2,0h2v1h-2v-1zm3,0h1v2h-2v-1h1v-1zm2,0h2v1h-2v-1zm-21,1h1v1h-1v-1zm4,0h1v1h-1v-1zm14,0h1v1h-1v-1zm-17,1h1v1h-1v-1zm3,0h2v1h-2v-1zm4,0h1v1h-1v-1zm2,0h1v1h-1v-1zm2,0h1v1h-1v-1zm2,0h1v1h-1v-1zm2,0h2v1h-2v-1zm4,0h1v1h-1v-1zm-21,1h1v1h-1v-1zm2,0h3v1h-3v-1zm5,0h3v1h-3v-1zm4,0h1v1h1v1h-2v-2zm3,0h2v1h-2v-1zm4,0h2v1h-2v-1zm-22,1h7v7h-7v-7zm8,0h1v2h-1v-2zm2,0h2v1h-2v-1zm3,0h1v1h-1v-1zm2,0h3v1h1v1h1v1h-1v1h-1v-1h-1v-1h-2v-2zm6,0h1v2h-1v-2zm-24,1v5h5v-5h-5zm8,0h1v1h-1v-1zm16,0h1v1h-1v-1zm-23,1v3h3v-3h-3zm10,0h1v1h-1v-1zm2,0h1v2h-1v1h-1v-1h1v-2zm-4,1h2v1h-2v-1zm12,0h1v1h-1v-1zm-17,1h1v1h-1v-1zm2,0h1v1h-1v-1zm4,0h1v1h-1v-1zm4,0h1v1h-1v-1zm2,0h1v1h-1v-1zm-4,1h1v1h-1v-1zm2,0h1v1h-1v-1zm4,0h1v1h-1v-1zm-19,1h2v1h1v1h-2v1h-1v-3zm3,0h2v1h-2v-1zm4,0h1v2h-1v-2zm2,0h1v1h-1v-1zm3,0h2v1h1v1h-2v1h-1v-3zm4,0h1v1h-1v-1zm3,0h3v2h-1v-1h-2v-1zm-22,1h1v1h-1v-1zm19,0h1v1h-1v-1zm-11,1h1v1h-1v-1zm2,0h2v1h-2v-1zm4,0h1v1h-1v-1zm2,0h1v1h1v1h-2v-2zm-17,1h2v1h-2v-1zm4,0h1v1h-1v-1zm2,0h1v1h-1v-1zm3,0h2v1h-2v-1zm3,0h1v1h-1v-1zm4,0h3v1h-3v-1zm5,0h2v1h-2v-1z" fill="black" />
//               </svg>
//             </div>
//           </div>
//         </div>

//         <p className="text-gray-700 text-lg">
//           Код діятиме <span className="font-semibold">{formatTime(timeLeft)} секунд</span>
//         </p>
//       </div>
//     </div>
//   </div>
// );
