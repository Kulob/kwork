import React, { useState } from "react";
import Question from "../../assets/Question.svg";
import Left from "../../assets/Left.svg";
import { IconButton } from "@mui/material";
import { dataAccordions } from "../navigate";

const AccordionItem = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" bg-white rounded-[25px] w-[1390px] py-[20px] px-[20px] accordion mb-7">
      {
        dataAccordions.map((el, index) => (
          <>
          <div className=" flex justify-between items-center text-center  h-[80px] ">
        <div className=" flex items-center text-center">
          <div className=" w-[40px] h-[40px] rounded-full bg-[#2763ff] flex justify-center items-center ">
            <img src={Question} alt="" />
          </div>
          <h2 className=" ml-[20px] gilroy-semibold text-[16px]">
            {el.title}
          </h2>
        </div>
        <button
          onClick={() => setOpen(!open)}
          style={{
            transform: `rotate(${open ? 180 : 0}deg)`,
            transition: "all 0.25s",
          }}
          className=" w-[40px] h-[40px] rounded-full border-2 border-blue-500 flex justify-center items-center "
        >
          <IconButton>
            <img src={Left} alt="" />
          </IconButton>
        </button>
      </div>
      
        <div className={`${open  ? '' : ' hidden'}`}>
          <hr className=" w-full mb-2" />
          <h4 className=" gilroy-light text-[16px] text-[#C4C6CF]">
            {el.description}
          </h4>
        </div>
        </>
        ))
      }
    </div>
  );
};

export default AccordionItem;
