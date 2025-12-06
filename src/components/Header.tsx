import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/Logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-2 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex gap-4">
            <img
              src={Logo}
              alt="petFriend"
              className="h-[8svh] landscape:h-[14svh]"
            />
          </Link>
          <div>
            <div className="text-sm font-semibold text-gray-900">
              МІЙ СТУДЕНТ
            </div>
            <div className="text-xs text-gray-600">
              Карпатського національного університету
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-5">
          <a
            href="/login"
            className="text-xs text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Про нас
          </a>
          <a
            href="/login"
            className="text-xs text-gray-700 hover:text-blue-600 transition"
          >
            Новини
          </a>
          <a
            href="/login"
            className="text-xs text-gray-700 hover:text-blue-600 transition"
          >
            Методичні рекомендації
          </a>
          <a
            href="/login"
            className="text-xs text-gray-700 hover:text-blue-600 transition"
          >
            Освіта
          </a>
          <a
            href="/login"
            className="text-xs text-gray-700 hover:text-blue-600 transition"
          >
            Доступ до публічної інформації
          </a>
        </nav>

        <button
          onClick={() => navigate("/login")}
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-xs hover:bg-blue-50 transition hover:cursor-pointer"
        >
          Увійти до кабінету
        </button>
      </div>
    </header>
  );
};

export default Header;
