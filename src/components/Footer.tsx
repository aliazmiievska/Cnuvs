import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 pl-8">
      <div className="w-2xl max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div>
          <h3 className="text-xs font-medium mb-4">СОЦМЕРЕЖІ</h3>
          <div className="space-y-3">
            <a href="#" className="block text-xs text-white hover:text-white transition-colors pb-3">
              Клацай, щоб переглянути
            </a>
            <a href="#" className="block text-xs text-neutral-400 hover:text-white transition-colors border-b-2 border-b-neutral-800 pb-3">
              Telegram
            </a>
            <a href="#" className="block text-xs text-neutral-400 hover:text-white transition-colors border-b-2 border-b-neutral-800 pb-3">
              Instagram
            </a>
            <a href="#" className="block text-xs text-neutral-400 hover:text-white transition-colors border-b-2 border-b-neutral-800 pb-3">
              X (Twitter)
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-medium mb-4">КОНТАКТИ</h3>
          <div className="space-y-6">
            <div className="border-b-2 border-b-neutral-800 pb-2">
              <p className="text-xs text-white pb-5">Контактний номер</p>
              <a href="tel:0342596061" className="text-xs text-neutral-400 hover:text-gray-300 transition-colors">
                0342 59-60-61
              </a>
            </div>
            <div className="pb-3 border-b-2 border-b-neutral-800 ">
              <p className="text-xs text-white mb-2">Інтеграційний центр</p>
              <a href="tel:0342596266" className="text-xs text-neutral-400 hover:text-gray-300 transition-colors">
                0342 59-62-66
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div className="mb-6 border-b-2 border-b-neutral-800 pb-2">
            <p className="text-xs text-white pb-5">Мій Студент support</p>
            <a href="mailto:support@student.gov.ua" className="text-xs text-neutral-400 hover:text-gray-300 transition-colors">
              support@student.gov.ua
            </a>
          </div>
          <div className="border-b-2 border-b-neutral-800 pb-3">
            <p className="text-xs text-white mb-2">Стати партнером</p>
            <a href="mailto:parnter@student.gov.ua" className="text-xs text-neutral-400 hover:text-gray-300 transition-colors">
              parnter@student.gov.ua
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
