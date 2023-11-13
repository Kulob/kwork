import React from "react";
import Question from "../../assets/Question.svg";
import Left from "../../assets/Left.svg";
import { IconButton } from "@mui/material";
import useOpenController from "./useOpenController";

export const Accordion = ({ section, key }) => {
  const { isOpen, toggle } = useOpenController(false);
  console.log(section);
  return (
    <div className="bg-white rounded-[25px] w-[1390px] pt-[20px] px-[20px] accordion mb-7 accordion-item">
      <ExpendableColumn
        question={section.question}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen && <TextSection text={section.answer} />}
      <div className="underline"></div>
    </div>
  );
};

export const ExpendableColumn = ({ question, isOpen, toggle }) => {
  return (
    <div className=" flex justify-between items-center text-center h-[80px] accordion-question" onClick={toggle}>
        <div className=" flex items-center">
          <div className=" w-[40px] h-[40px] rounded-full bg-[#2763ff] flex justify-center items-center accordion-icons">
            <img src={Question} alt="" />
          </div>
          <h2 className=" ml-[20px] gilroy-semibold text-[16px] accordion-title">
          {question}
          </h2>
        </div>
        <button
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition: "all 0.25s"
          }}
          className=" w-[40px] h-[40px] rounded-full border-2 border-blue-500 flex justify-center items-center accordion-icons"
        >
          <IconButton>
            <img src={Left} alt="" />
          </IconButton>
        </button>
      </div>
  );
};

export const TextSection = ({ text }) => {
  return (
    <div className="">
      <hr className=" w-full mb-2" />
      <div className=" gilroy-light text-[16px] text-[#C4C6CF]">{text}</div>
    </div>
  );
};