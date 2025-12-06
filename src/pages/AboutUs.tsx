import React from "react"
import AntonCat from '../assets/Anton.png'
import FooterTop from '../components/FooterTop'
import Header from '../components/Header'

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <section className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-purple-100 overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={AntonCat}
                  alt="Anton"
                  className="h-[39svh] landscape:h-[73svh] object-contain"
                />
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10">
              <div className="flex gap-2 mb-6">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Мій студент - моя значимість
                </span>
                <span className="bg-blue-400 text-white px-4 py-1 rounded-full text-sm">
                  АБВР у цифрове майбутнє освіти
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                У кожного покоління є свої інструменти змін.
                Для нас — це технології.
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">«Мій студент» — не просто програма.</span> Це{' '}
                <span className="text-blue-600 font-medium">наша спроба зробити університет ближчим, чеснішим і справжнім.</span>{' '}
                Ми втомились від складності,{' '}
                <span className="text-blue-600 font-medium">від паперів, від байдужості систем.</span>{' '}
                І тому ми створили щось своє — просте, живе, відкрите.
                Бо освіта — це не про форму. Це про людину.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white py-4 overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            <span className="mx-8">Разом сильніші. Разом за змін.</span>
            <span className="mx-8">Думай глобально, дій локально.</span>
            <span className="mx-8">Твій голос. Твій вибір. Твоя сила.</span>
            <span className="mx-8">Лідери сьогодення – архітектори завтра.</span>
            <span className="mx-8">Творимо майбутнє своїми руками.</span>
            <span className="mx-8">Разом сильніші. Разом за змін.</span>
            <span className="mx-8">Думай глобально, дій локально.</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
