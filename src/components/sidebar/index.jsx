import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import {
  navMenu,
  navMenuColor,
  navMenuInfo,
  navMenuMessage,
} from "../navigate";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/go.svg";
import Menu from "../../assets/Menu.svg";
import Dealkgo from "../../assets/DealkGo.png";
import "./sidebar.scss";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = React.useState(true);
  const navigate = useNavigate();
  const currentPath = useLocation();
  return (
    <>
      <div className="flex w-[350px] h-max items-center flex-col bg-white py-[25px] z-20 sidebar-container">
        <div className=" flex justify-between items-center mb-[45px] ml-[10px] z-10">
          <Link to="/" className=" flex items-center mr-7">
            <img src={Logo} alt="" className=" w-[53px] h-[30px] mr-[15px]" />
            <img src={Dealkgo} alt="" className=" w-[139px] h-[17px]" />
          </Link>
          <button className="button-menu " onClick={() => setOpenSidebar(!openSidebar)}>
            <IconButton>
              <img src={Menu} alt="" /> 
              {/* {!openSidebar ? <img src={Menu} alt="" /> : <span className=" w-[30px] h-[30px]">X</span>} */}
            </IconButton>
          </button>
        </div>
        {
          openSidebar && (
            <div className=" w-full px-[30px] sidebar-pages">
          {navMenu.map((el) => (
            <div
              onClick={() => navigate(`${el.path}`)}
              className={`${
                currentPath.pathname === el.path
                  ? "flex gilroy-regular justify-start items-center text-center text-[18px] gap-[19px] h-[60px] pl-[15px] rounded-[24px] bg-[#2763FF] text-white"
                  : "flex gilroy-regular justify-start items-center text-center text-[18px] gap-[19px] h-[60px] pl-[15px] rounded-[24px] hover:bg-[#2763FF] hover:text-white cursor-pointer"
              } `}
              key={el.id}
            >
              <span className=" hover:text-white">{el.icon}</span>
              <p>{el.name}</p>
            </div>
          ))}
          <div className="gradient rounded-[30px] mt-[18px] mb-[33px]">
            {navMenuColor.map((el) => (
              <div
                onClick={() => navigate(`${el.path}`)}
                className={`${
                  currentPath.pathname === el.path
                    ? "flex gilroy-regular justify-between items-center text-center gap-[19px] h-[60px] pl-[15px] text-[18px] rounded-[24px] bg-[#2763FF] text-white"
                    : "flex justify-between items-center text-center gilroy-regular gap-[19px] h-[60px] pl-[15px] text-[18px] rounded-[24px] text-[#2763FF] hover:bg-[#2763FF] hover:text-white cursor-pointer"
                } `}
                key={el.id}
              >
                <div className=" flex items-center gap-4 hover:text-white">
                  <span>{el.icon}</span>
                  <p className=" text-black">{el.name}</p>
                </div>
                <span className=" bg-[#2763FF] rounded-full text-white font-semibold text-[12px] px-1 mr-[21px] gilroy-regular">
                  {el.count}
                </span>
              </div>
            ))}
          </div>
          <span className=" gilroy-light text-[16px] text-gray-400 pl-[15px] mb-4">
            Информация
          </span>
          <div className=" mt-[8px] mb-[35px]">
            {navMenuInfo.map((el) => (
              <div
                onClick={() => navigate(`${el.path}`)}
                className={`${
                  currentPath.pathname === el.path
                    ? "flex gilroy-light justify-start items-center text-center text-[16px] gap-[19px] h-[44px] pl-[15px] rounded-[24px] bg-[#2763FF] text-white"
                    : "flex gilroy-light justify-start items-center text-center text-[16px] gap-[19px] h-[44px] pl-[15px] rounded-[24px] hover:bg-[#2763FF] hover:text-white cursor-pointer"
                } `}
                key={el.id}
              >
                {el.name}
              </div>
            ))}
          </div>
          <h3 className=" gilroy-semibold text-[16px] pl-[15px] mb-[26px]">
            DealkGo.com, 2023
          </h3>
          <div className=" flex justify-start items-center gap-3 pl-[15px] mb-[10px]">
            {navMenuMessage.map((el) => (
              <span className="">{el.icon}</span>
            ))}
          </div>
        </div>
          )
        }
      </div>
    </>
  );
};
export default Sidebar;
