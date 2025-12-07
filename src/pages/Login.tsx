import React, { useState } from "react";
import LogoBig from "../assets/images/LogoBig.png";
import Books from "../assets/images/Books.png"
import FooterTop from "../components/FooterTop";
import AuthModal from "../components/LoginAppModal";
import Card from "../assets/images/Card.png"

const Login: React.FC = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <img
                src={Card}
                alt="Card"
                className="absolute -top-20 -left-15 w-2xs"
              />
            </div>

            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">
                Вхід до веб<span className="text-blue-600">порталу</span>
              </h1>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Мій <span className="text-blue-600">Студент</span>
              </h2>
              <p className="text-lg text-gray-700 flex items-center gap-2">
                Оберіть спосіб для входу
                <span className="text-2xl">🔑</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                **Єдина централізована система входу до сервісів університету
              </p>
            </div>

            <div className="space-y-3">
              <button className="w-full max-w-sm bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition flex items-center justify-center gap-2">
                Увійти через ID.GOV.UA
              </button>
              <button
                onClick={() => setShowAuth(true)}
                className="w-full max-w-sm bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                Увійти через додаток
              </button>
            </div>

            <div className="pt-4 border-t border-gray-300 max-w-sm">
              <p className="text-center text-gray-600 text-sm mb-2">
                Ще не студент КНУВС?
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm underline">
                Створити кабінет абітурієнта
              </button>
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

            <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
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
