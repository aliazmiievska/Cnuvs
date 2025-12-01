import React from "react"
import AntonCat from '../assets/Anton.png'
import FooterTop from '../components/layouts/FooterTop'
import Header from '../components/layouts/Header'

const AboutUs: React.FC = () => {
  return (<div>
    <Header />
    <section className="relative h-[92.2svh] landscape:h-[85svh] w-full flex flex-col landscape:flex-row justify-between pt-[12svh] px-[8svw] overflow-hidden">

      <div className="flex justify-center landscape:justify-end green-circle">
        <img
          src={AntonCat}
          alt="Anton"
          className="h-[39svh] landscape:h-[73svh] object-contain"
        />
      </div>

      <div className="flex flex-col justify-between items-center h-full text-center landscape:text-left">
        <div>
          <div>
            <span>Мій студент - моя зручність</span> <span>Крок у цифрове майбутнє освіти</span>
          </div>
          <h1 className="text-[1svh] landscape:text-[2svw] font-bold leading-tight mb-[5svh]">
            У кожного покоління є свої інструменти змін. <br />
            Для нас — це технології.<br />
            «Мій студент» — не просто програма. Це наша спроба зробити <br />
            університет ближчим, чеснішим і справжнім. Ми втомились від <br />
            складності, від паперів, від байдужості систем. І тому ми <br />
            створили щось своє — просте, живе, відкрите. <br />
            Бо освіта — це не про форму. Це про людину.
          </h1>
          <div className="bg-[#DEC1E9] rounded-full w-45 h-45 flex justify-center items-center">fffffff</div>
        </div>
        
      </div>

    </section>
    <FooterTop />
  </div>
  )
}

export default AboutUs
