import React, { useState } from 'react'

const FaqCard = ({ id, question, answer, onClick }) => {

    const [faq, setFaq] = useState(false);

    return (
        <>
            <div className='w-[1200px] overflow-hidden text-wrap cursor-pointer' onClick={() => setFaq(!faq)}>
                <div className='flex justify-between '>
                    <h4 className='dark-pink font-semibold text-lg' >{question}</h4>
                    <button className='dark-pink text-3xl' >  {faq ? "-" : "+"} </button>
                </div>

                <div className={`${faq ? "block" : "hidden"}`}>
                    <p className='grey font mt-3'>{answer}</p>
                </div>
                <hr className='dark-pink mt-5' />
            </div>
        </>
    )
}

export default FaqCard