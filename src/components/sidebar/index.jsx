import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import { navMenu } from "../navigate";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const currentPath = useLocation()
  console.log(currentPath);
  return (
    <div className=" w-[350px] h-screen flex items-center flex-col bg-white py-5">
      <div className=" flex justify-between items-center mb-[44px] gap-4">
        <img src={Logo} alt="" className=" w-[210px]"/>
        <IconButton>
          <MenuIcon sx={{fontSize:'30px'}}/>
        </IconButton>
      </div>
      <div className=" w-full px-[30px]">
        {navMenu.map((el) =>(
          <div onClick={() => navigate(`${el.path}`)} className={`${currentPath.pathname === el.path ? 'flex justify-start gap-4 py-4 px-3 rounded-[50px] bg-[#2763FF] text-white' : 'flex justify-start gap-4 py-4 px-3 rounded-[50px] hover:bg-[#2763FF] hover:text-white'} `} key={el.id} >
            <span>{el.icon}</span>
            <p>{el.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
{/* <li><Link href={'/dashboard'} className={`${currentPath === '/dashboard' ? 'text-zinc-900' : ' text-zinc-500 hover:text-zinc-900'}`}>Dashboard</Link></li> */}

export default Sidebar;
