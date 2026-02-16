import React from "react";
import Student from "../assets/images/Student.png";
import FooterTop from "../components/FooterTop";
import Header from "../components/Header";
import WaveText from "../assets/elements/waveText.svg"

const AboutUs: React.FC = () => {
  return (
    <>
      <section className="relative flex flex-col justify-between h-[100svh] overflow-hidden">
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
              <div className="mb-2 self-end">
                <img
                  src={WaveText}
                  alt="WaveText"
                  className="h-[1.5rem]"
                />
              </div>

              <p className="text-sm font-medium text-gray-900 leading-relaxed">
                <div className="bg-gradient-to-br from-black from-20% to-blue-500 to-60% bg-clip-text text-transparent">
                  У кожного покоління є свої інструменти змін. <br />
                  Для нас — це технології. <br />
                  «Мій студент» — не просто програма. Це наша спроба зробити університет ближчим, чеснішим і справжнім. Ми втомились від складності, від паперів, від байдужості систем. І тому ми створили щось своє — просте, живе, відкрите. Бо освіта — це не про форму. Це про людину.
                </div>
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
