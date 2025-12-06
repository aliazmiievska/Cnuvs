import React from "react";

interface Props {
  onClose: () => void;
  onSuccess: (token: string) => void;
}

const AuthModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.73)] flex items-center justify-center z-50">
      <div className="bg-neutral-100 p-4 rounded w-[80vw] max-w-[400px]">
        <div className="flex gap-2">
          <button onClick={onClose} className="underline">
            Close
          </button>
        </div>

        <div>
          Вхід за допомогою застосунку <br />
          Мій Студент
        </div>
        <div>Відскануйте QR за допомогою камери або сканеру в застосунку</div>
        <div>*QR*</div>
        <div>Код діятиме 2:30 секунд</div>
      </div>
    </div>
  );
};

export default AuthModal;
