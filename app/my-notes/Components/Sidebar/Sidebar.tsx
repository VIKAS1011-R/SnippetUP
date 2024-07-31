"use client";
import React, { useContext } from "react";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { SiJavascript, SiCplusplus, SiPython } from "react-icons/si";
import DataObjectIcon from "@mui/icons-material/DataObject";
import { useGlobalContext } from "@/ContextApi";

export default function Sidebar() {

  const {darkModeObject:{darkMode}, openSidebarObject: {openSideBar,setOpenSideBar},openContentNoteObject: {openContentNote,setOpencontentNote},isMobileObject:{isMobile}}=useGlobalContext();


  return (
    <div className={` ${openSideBar ? "fixed z-50 shadow-lg": "max-md:hidden"} ${openContentNote ? "hidden": "block"} pr-10 p-6 flex flex-col gap-2  pt-7 ${darkMode[1].isSelected?"bg-slate-900": "bg-white"} ${isMobile? "h-screen":""} border-r `}>
      <Logo />
      <QuickLinks />
      <Languages />
    </div>
  );

  function Logo() {
    return (
      <div className="flex gap-2 items-center">
        <div className="bg-purple-600 p-[6px] rounded-md">
          <DataObjectIcon sx={{ fontSize: 27, color: "white" }} />
        </div>
        <div className="flex gap-1 text-[19px]">
          <span className="font-bold text-purple-600">Snippet</span>
          <span className={`${darkMode[1].isSelected ? "text-slate-400" : "text-slate-600"} font-semibold`}>Up</span>
        </div>
      </div>
    );
  }

  function QuickLinks() {
    const {
      sideBarMenuObject: { sideBarMenu, setSideBarMenu },
    } = useGlobalContext();
    console.log(sideBarMenu);
    function clickMenu(index: number) {
      const newSideBarMenu = sideBarMenu.map((menu, i) => {
        if (i === index) {
          return {
            ...menu,
            isSelected: true,
          };
        }
        return {
          ...menu,
          isSelected: false,
        };
      });
      setSideBarMenu(newSideBarMenu);
    }
    return (
      <div className="mt-20 text-sm w-full">
        <div className="font-bold text-slate-500">Quick Links</div>
        <ul className=" text-slate-500 mt-4 flex flex-col gap-2 ">
          {sideBarMenu.map((menu, index) => (
            <li
              key={index}
              onClick={() => clickMenu(index)}
              className={`cursor-pointer flex select-none gap-1 items-center px-2 py-1 rounded-md ${
                menu.isSelected ? "text-white bg-purple-600" : "text-slate-500"
              } p-[7px] px-2 rounded-md w-[85%]`}
            >
              <div className="flex items-center gap-2">
                {menu.icons}
                {menu.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function Languages() {
    return (
      <div className="mt-20 text-sm">
        <div className="font-bold text-slate-500">Languages</div>
        <div className="mt-5 ml-2 text-slate-500 flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <SiJavascript size={15} /> Javascript
            </div>
            <span className="font-bold">3</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <SiPython size={15} /> Python
            </div>
            <span className="font-bold">3</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <SiCplusplus size={15} /> C++
            </div>
            <span className="font-bold">3</span>
          </div>
        </div>
      </div>
    );
  }
}
