import React from "react";
import Student from "../assets/Student.png";
import FooterTop from "../components/FooterTop";
import Header from "../components/Header";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <section className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-purple-100 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="relative">
              <img
                src={Student}
                alt="Anton"
                className="h-100"
              />
              {/* тіпа кружечки блюрові
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div
                className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
                style={{ animationDelay: "1s" }}
              >
              </div> */}
            </div>

            <div className="relative z-10">
              <div className="flex gap-2 mb-6">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Мій студент - моя зручність
                </span>
                <span className="bg-blue-400 text-white px-4 py-1 rounded-full text-sm">
                  Крок у цифрове майбутнє освіти
                </span>
              </div>

              <p className="text-xl font-bold text-gray-900 leading-relaxed">
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
