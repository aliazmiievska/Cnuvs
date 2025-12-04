import React, { useState } from "react"
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    const [openBlock, setOpenBlock] = useState<null | 'location' | 'contacts' | 'pages'>(null)

    const toggle = (block: typeof openBlock) => {
        setOpenBlock(prev => (prev === block ? null : block))
    }

    return (
        <footer className="bg-black text-gray-200 py-[6vh]">
            <div className="w-[90vw] flex flex-col gap-[6vh] items-center
                            landscape:flex-row landscape:justify-between landscape:items-start landscape:w-[80svw]">

                <div className="w-full text-center text-[2.5vh] 
                                landscape:text-left landscape:w-[22svw] landscape:text-[3.2svh]">
                    <button onClick={() => toggle('location')} className="w-full flex justify-between items-center">
                        <span>СОЦМЕРЕЖІ</span>
                        <span className="landscape:hidden text-[3vh]">
                            {openBlock === 'location' ? '▲' : '▼'}
                        </span>
                    </button>

                    <div>Клацай, щоб переглянути</div>

                    <div className={`mt-[2vh] ${openBlock === 'contacts' ? '' : 'hidden'} landscape:block`}>
                        <Link to="https://web.telegram.org/" className="block pt-[2vh] text-[2.3vh] text-gray-300
                                              landscape:text-[3svh]">Telegram</Link>
                        <hr />

                        <Link to="https://www.instagram.com/" className="block pt-[2vh] text-[2.3vh] text-gray-300
                                              landscape:text-[3svh]">Instagram</Link>
                        <hr />
                        
                        <Link to="https://www.x.com/" className="block pt-[2vh] text-[2.3vh] text-gray-300
                                              landscape:text-[3svh]">X(Twitter)</Link>
                        <hr />
                    </div>
                </div>

                <div className="w-full text-center text-[2.5vh] 
                                landscape:text-left landscape:w-[22svw] landscape:text-[3.2svh]">
                    <button onClick={() => toggle('contacts')} className="w-full flex justify-between items-center">
                        <span>КОНТАКТИ</span>
                        <span className="landscape:hidden text-[3vh]">
                            {openBlock === 'contacts' ? '▲' : '▼'}
                        </span>
                    </button>

                    <div>Контактний номер</div>

                    <div className={`mt-[2vh] ${openBlock === 'contacts' ? '' : 'hidden'} landscape:block`}>
                        <Link to="" className="block pt-[4vh] text-[2.3vh] text-gray-300
                                              landscape:pt-[10vh] landscape:text-[3svh]">0342 59-60-61</Link>
                    </div>
                    <hr />

                    <div>Інтеграційний номер</div>

                    <div className={`mt-[2vh] ${openBlock === 'contacts' ? '' : 'hidden'} landscape:block`}>
                        <Link to="" className="block pt-[4vh] text-[2.3vh] text-gray-300
                                              landscape:pt-[10vh] landscape:text-[3svh]">0342 59-62-66</Link>
                    </div>
                    <hr />
                </div>

                <div className="w-full text-center text-[2.5vh] 
                                landscape:text-left landscape:w-[22svw] landscape:text-[3.2svh]">
                    <button onClick={() => toggle('pages')} className="w-full flex justify-between items-center">
                        <span className="landscape:hidden text-[3vh]">
                            {openBlock === 'pages' ? '▲' : '▼'}
                        </span>
                    </button>

                    <div className={`mt-[2vh] ${openBlock === 'pages' ? '' : 'hidden'} landscape:block`}>
                        <div>Мій Студент support</div>
                        <div>support@student.gov.ua</div>
                        <hr />

                        <div>Стати партнером</div>
                        <div>partner@student.gov.ua</div>
                        <hr />
                    </div>
                </div>
            </div>

            <div className="block pt-[4vh] text-[1.8vh] text-gray-400 landscape:hidden text-center">
                © Copyright. All right reserved
            </div>
        </footer>
    )
}

export default Footer
