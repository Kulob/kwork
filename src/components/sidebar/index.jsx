import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import { navMenu, navMenuColor } from "../navigate";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/logo.png";
import './sidebar.scss'

const Sidebar = () => {
  const navigate = useNavigate();
  const currentPath = useLocation()
  return (
    <div className=" w-[350px] h-screen flex items-center flex-col bg-white py-5 ">
      <div className=" flex justify-between items-center mb-[44px] gap-4">
        <Link to='/'>
        <img src={Logo} alt="" className=" w-[210px]"/>
        </Link>
        <IconButton>
          <MenuIcon sx={{fontSize:'30px'}}/>
        </IconButton>
      </div>
      <div className=" w-full px-[30px] ">
        {navMenu.map((el) =>(
          <div onClick={() => navigate(`${el.path}`)} className={`${currentPath.pathname === el.path ? 'flex justify-start gap-4 py-[15px] px-3 rounded-[50px] bg-[#2763FF] text-white' : 'flex justify-start gap-4 py-4 px-3 rounded-[50px] hover:bg-[#2763FF] hover:text-white cursor-pointer'} `} key={el.id} >
            <span>{el.icon}</span>
            <p>{el.name}</p>
          </div>
        ))}
        <div className="gradient rounded-[30px]">
        {navMenuColor.map((el) =>(
          <div onClick={() => navigate(`${el.path}`)} className={`${currentPath.pathname === el.path ? 'flex justify-between gap-4 py-[15px] px-3 rounded-[50px] bg-[#2763FF] text-white' : 'flex justify-between items-center gap-4 py-4 px-3 rounded-[50px] text-[#2763FF] hover:bg-[#2763FF] hover:text-white cursor-pointer'} `} key={el.id} >
            <div className=" flex items-center gap-4">
            <span >{el.icon}</span>
            <p className=" text-black">{el.name}</p>
            </div>
            <span className=" bg-[#2763FF] rounded-full text-white font-semibold text-[12px] px-1">{el.count}</span>
          </div>
        ))}
          </div> 
      </div>
    </div>
  );
};
export default Sidebar;
