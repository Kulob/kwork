import React from "react";
import Search from "../../assets/Search ico.svg";
import Box from "../../assets/Box alt.svg";
import Users from "../../assets/Users.svg";
import Chat from "../../assets/Chat.svg";
import Support from "../../assets/Supports.svg";
import Notification from "../../assets/Notifications.svg";
import Add from "../../assets/Add.svg";
import Down from "../../assets/Down arrow.svg";
import { IconButton, TextField } from "@mui/material";

const TopBar = () => {
  return (
    <div className=" flex justify-between items-center py-[15px] px-[30px] topbar-item">
      <div className=" flex justify-between items-center gap-7 topbar-container">
        <div className=" flex justify-between items-center w-[300px] h-[50px] relative bg-white rounded-[25px] topbar-input">
          <input
            placeholder="Поиск по сайту..."
            variant="outlined"
            type="text"
            autoComplete="off"
            className=" border- w-full rounded-[25px] h-[50px] px-[20px]"
          />
          <img src={Search} alt="" className=" absolute right-[20px]" />
        </div>
        <div className=" flex justify-between items-center bg-white rounded-[25px] pr-[17px] w-[360px] topbar-product">
          <div className=" flex items-center pl-[22px] h-[50px] topbar-box">
            <img src={Box} alt="" width={24} height={24} />
            <div className=" flex flex-col text-[14px] ml-[10px]">
              <span className=" gilroy-semibold pt-1">18192436</span>
              <span className=" gilroy-light text-[#C4C6CF]">
                Купленно товар
              </span>
            </div>
          </div>
          <hr className=" border w-6 rotate-90" />
          <div className=" flex items-center pl-[4px] h-[50px]">
            <img src={Users} alt="" />
            <div className=" flex flex-col text-[14px] ml-[10px]">
              <span className=" gilroy-semibold pt-1">486532</span>
              <span className=" gilroy-light text-[#C4C6CF]">
                Пользователей
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center pl-[164px] gap-[30px] topbar-icons">
        <div className=" flex justify-between items-center gap-[30px]">
          <div className=" flex items-center gap-[10px]">
            <button className=" w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center relative">
              <IconButton>
                <img src={Chat} alt="" />
              </IconButton>
              <span className=" absolute top-0 right-0 w-[20px] h-[16px] rounded-[8px] bg-[#2763ff] text-white flex justify-center items-center">
                2
              </span>
            </button>
            <button className=" w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
              <IconButton>
                <img src={Support} alt="" />
              </IconButton>
            </button>
            <button className=" w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
              <IconButton>
                <img src={Notification} alt="" />
              </IconButton>
            </button>
          </div>
          <div className=" flex items-center bg-white rounded-[25px] w-[136px] px-1 topbar-add">
            <button className=" w-[40px] h-[40px] rounded-full bg-[#93d43f] flex justify-center items-center">
              <IconButton>
                <img src={Add} alt="" />
              </IconButton>
            </button>
            <div className=" flex flex-col pl-2">
              <span className=" gilroy-semibold pt-1">120 560 ₽</span>
              <span className=" gilroy-light text-[#C4C6CF]">62220 DG</span>
            </div>
          </div>
        </div>
        <div className=" flex items-center bg-white rounded-[25px] px-1 topbar-user">
          <button className=" w-[40px] h-[40px] rounded-full bg-[#29e8ce] flex justify-center items-center">
            <IconButton>
              <img src={Notification} alt="" />
            </IconButton>
          </button>
          <div className=" flex flex-col pl-2">
            <span className=" gilroy-semibold pt-1 text-[16px]">Alexander</span>
            <span className=" gilroy-light text-[#93d43f]">Online</span>
          </div>
          <button className=" pl-3">
            <IconButton>
              <img src={Down} alt="" />
            </IconButton>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
