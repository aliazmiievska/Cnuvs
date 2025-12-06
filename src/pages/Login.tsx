import React, { useState } from "react"
import AntonCat from '../assets/Anton.png'
import FooterTop from '../components/FooterTop'
import AuthModal from '../components/LoginAppModal'

const Login: React.FC = () => {

    const [showAuth, setShowAuth] = useState(false)

    return (<>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
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
                        <button onClick={() => setShowAuth(true)} className="w-full max-w-sm bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center justify-center gap-2">
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
                        <div className="relative inline-block">
                            <img
                                src={AntonCat}
                                alt="Anton"
                                className="h-[39svh] landscape:h-[73svh] object-contain"
                            />
                        </div>
                    </div>

                    <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
            </div>



            {showAuth && (
                <AuthModal
                    onClose={() => {
                        setShowAuth(false)
                    }}
                    onSuccess={() => {
                        setShowAuth(false)
                    }}
                />
            )}
        </div>
        <FooterTop />
    </>
    )
}

export default Login
