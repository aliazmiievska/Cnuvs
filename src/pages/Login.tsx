import React, { useState } from "react"
import AntonCat from '../assets/Anton.png'
import FooterTop from '../components/FooterTop'
import AuthModal from '../components/LoginAppModal'

const Login: React.FC = () => {

    const [showAuth, setShowAuth] = useState(false)

    return (<div>
        <section className="relative h-[92.2svh] landscape:h-[85svh] w-full flex flex-col landscape:flex-row justify-between pt-[12svh] px-[8svw] overflow-hidden">

            <div>
                <h1>
                    Вхід до вебпорталу <br />
                    Мій Студент
                </h1>
                <h2>
                    Оберіть спосіб для входу 🔑
                </h2>
                <h4>
                    **Єдина централізована система входу до сервісів університету
                </h4>
                <button>
                    Увійти через ID.GOV.UA
                </button>
                <button onClick={() => setShowAuth(true)}>
                    Увійти через додаток
                </button>
                <hr />
                <div>Ще не студент КНУВС?</div>
                <button>
                    Створити кабінет абітурієнта
                </button>
                <div className="bg-[#DEC1E9] rounded-full w-45 h-45 flex justify-center items-center">fffffff</div>
            </div>

            <div className="flex justify-center landscape:justify-end green-circle">
                <img
                    src={AntonCat}
                    alt="Anton"
                    className="h-[39svh] landscape:h-[73svh] object-contain"
                />
            </div>
        </section>
        <FooterTop />

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
    )
}

export default Login
