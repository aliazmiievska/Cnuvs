import React, { useState } from "react"
import AntonCat from '../assets/Anton.png'
import FooterTop from '../components/FooterTop'
import AuthModal from '../components/LoginAppModal'

const Login: React.FC = () => {

    const [showAuth, setShowAuth] = useState(false)

    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <div className="inline-block">
                    <div className="bg-blue-400 rounded-lg p-4 transform -rotate-12 shadow-lg">
                        <div className="w-48 h-32 bg-blue-500 rounded-lg relative overflow-hidden">
                            <div className="absolute top-3 left-3 w-8 h-8 bg-white rounded-full"></div>
                            <div className="absolute top-6 right-4 space-y-1">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="h-1 bg-white rounded" style={{ width: `${60 - i * 8}px` }}></div>
                                ))}
                            </div>
                            <div className="absolute bottom-3 right-3 w-10 h-10 grid grid-cols-3 gap-0.5">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="bg-white rounded-sm"></div>
                                ))}
                            </div>
                        </div>
                    </div>
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
                    <button className="w-full max-w-sm bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2">
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
                    <div className="relative">
                        <div className="w-80 h-96 border-4 border-blue-400 rounded-2xl overflow-hidden bg-gradient-to-b from-blue-500 via-blue-600 to-blue-800 shadow-2xl">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="relative inline-block">
                                        <svg className="w-32 h-32 text-white opacity-90" viewBox="0 0 100 100" fill="currentColor">
                                            <path d="M50 10 L20 30 L20 50 L50 70 L80 50 L80 30 Z" opacity="0.6" />
                                            <path d="M50 30 L35 40 L35 55 L50 65 L65 55 L65 40 Z" />
                                            <circle cx="50" cy="50" r="8" />
                                            <rect x="46" y="58" width="8" height="12" rx="1" />
                                        </svg>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center">
                                            <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-4 left-4 right-4">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <div className="w-12 h-1 bg-white opacity-70 rounded"></div>
                                        <div className="w-8 h-1 bg-white opacity-70 rounded"></div>
                                    </div>
                                    <div className="w-10 h-10 bg-blue-400 rounded-lg opacity-80"></div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -right-8 flex flex-col items-end gap-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="bg-blue-500 rounded shadow-lg flex items-center justify-center"
                                    style={{
                                        width: `${120 - i * 10}px`,
                                        height: '40px',
                                    }}
                                >
                                    <div className="w-full h-6 bg-blue-600 rounded mx-2"></div>
                                </div>
                            ))}
                            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                                358 × 607
                            </div>
                            <div className="w-20 h-4 bg-blue-400 rounded shadow"></div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
        </div>
    </div>
    )
}

export default Login
