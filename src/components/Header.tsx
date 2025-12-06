import React from "react"
import { useNavigate } from 'react-router-dom'



const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-gray-900">МІЙ СТУДЕНТ</div>
                        <div className="text-xs text-gray-600">Карпатського національного університету</div>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    <a href="/login" className="text-sm text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">Про нас</a>
                    <a href="/login" className="text-sm text-gray-700 hover:text-blue-600 transition">Новини</a>
                    <a href="/login" className="text-sm text-gray-700 hover:text-blue-600 transition">Методичні рекомендації</a>
                    <a href="/login" className="text-sm text-gray-700 hover:text-blue-600 transition">Освіта</a>
                    <a href="/login" className="text-sm text-gray-700 hover:text-blue-600 transition">Доступ до публічної інформації</a>
                </nav>

                <button onClick={() => navigate('/login')} className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-50 transition hover:cursor-pointer">
                    Увійти до кабінету
                </button>
            </div>
        </header>
    )
}

export default Header
