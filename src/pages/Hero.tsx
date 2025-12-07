import React from "react";
import Student from "../assets/images/Student.png";
import FooterTop from "../components/FooterTop";
import Header from "../components/Header";

const AboutUs: React.FC = () => {
  return (
    <>
      <section className="relative flex flex-col justify-between bg-gradient-to-br from-blue-100 via-blue-50 to-purple-100 h-[100svh] overflow-hidden">
      <Header />
        <div className="container mx-auto">
          <div className="flex justify-around gap-5">
            <div className="relative flex items-end">
              <img
                src={Student}
                alt="Anton"
                className="w-[30svw]"
              />
            </div>

            <div className="w-[50svw] flex flex-col">
              <div className="flex gap-2 my-4 text-white py-1 text-xs self-end">
                <span className="bg-blue-500  px-4 py-1 rounded-full">
                  Мій студент - моя зручність
                </span>
                <span className="bg-blue-400  px-4 py-1 rounded-full">
                  Крок у цифрове майбутнє освіти
                </span>
              </div>

              <p className="text-sm font-medium text-gray-900 leading-relaxed">
                <div className="text-gray-900">
                  У кожного покоління є свої інструменти змін. <br />
                  Для нас — це технології.
                </div>
                «Мій студент» — не просто програма. Це наша спроба зробити університет ближчим, чеснішим і справжнім. Ми втомились від складності, від паперів, від байдужості систем. І тому ми створили щось своє — просте, живе, відкрите. Бо освіта — це не про форму. Це про людину.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterTop />
    </>
  );
};

export default AboutUs;
