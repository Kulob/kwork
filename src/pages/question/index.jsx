import React from 'react'
import AccordionItem from '../../components/accordion'
import { Main } from '../../components/accordion/Main'

const QuestionPage = () => {
  return (
    <div className=' px-[30px] mt-[14px]'>
      <h1 className=' gilroy-bold text-[30px] mb-[35px]'>Частые вопросы</h1>
      {/* <AccordionItem/> */}
      <Main/>
    </div>
  )
}

export default QuestionPage