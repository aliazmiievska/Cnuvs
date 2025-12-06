import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">СОЦМЕРЕЖІ</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Клацай, щоб переглянути
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">КОНТАКТИ</h3>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-400">Контактний номер</div>
                <div className="text-white">0342 59-60-61</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Інтеграційний центр</div>
                <div className="text-white">0342 59-62-66</div>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-400">Мій Студент support</div>
                <div className="text-white">support@student.gov.ua</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Стати партнером</div>
                <div className="text-white">partner@student.gov.ua</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
