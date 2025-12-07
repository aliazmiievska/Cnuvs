import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoBig from "../assets/images/LogoBig.png";
import Books from "../assets/images/Books.png"
import FooterTop from "../components/FooterTop";
import AuthModal from "../components/LoginAppModal";
import Card from "../assets/images/Card.png"

const Login: React.FC = () => {
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen bg-gradient-to-br from-blue-50 via-white to-blue-200 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="ml-25">
            <img
              src={Card}
              alt="Card"
              className="absolute -top-30 -left-15 w-2xs"
            />

            <div>
              <h1 className="text-3xl font-medium text-black mt-20 mb-2">
                Вхід до вебпорталу
              </h1>
              <h2 className="text-3xl font-medium text-black mb-2">
                Мій Студент
              </h2>
              <p className="text-md text-black flex items-center gap-2">
                Оберіть спосіб для входу
                <span className="text-2xl">🔑</span>
              </p>
              <p className="text-[2svh] font-light text-black mt-1 mb-6">
                **Єдина централізована система входу до сервісів університету
              </p>
            </div>

            <button className="w-45 h-8 bg-white border-2 border-blue-600 text-xs text-blue-600 rounded-xl hover:bg-blue-50 mb-2 transition flex items-center justify-center hover:cursor-pointer">
              Увійти через ID.GOV.UA
            </button>
            <button
              onClick={() => setShowAuth(true)}
              className="bg-blue-600 w-45 h-8 text-xs text-white rounded-xl hover:bg-blue-700 mb-7 transition  flex items-center justify-center hover:cursor-pointer"
            >
              Увійти через додаток
            </button>

            <div className="pt-4 max-w-sm border-t">
              <p className="text-center text-gray-500 font-light text-xs mb-2">
                Ще не студент КНУВС?
              </p>
              <div onClick={() => navigate('#')} className="text-center text-gray-500 hover:text-gray-700 font-light text-xs underline hover:cursor-pointer">
                Створити кабінет абітурієнта
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 flex items-end justify-center">
              <img
                src={LogoBig}
                alt="Anton"
                className="w-50 object-contain"
              />
              <img
                src={Books}
                alt="Anton"
                className="absolute top-65 left-40 w-80 object-contain"
              />
            </div>
          </div>
        </div>

        {showAuth && (
          <AuthModal
            onClose={() => {
              setShowAuth(false);
            }}
            onSuccess={() => {
              setShowAuth(false);
            }}
          />
        )}
      </div>
      <FooterTop />
    </>
  );
};

export default Login;
