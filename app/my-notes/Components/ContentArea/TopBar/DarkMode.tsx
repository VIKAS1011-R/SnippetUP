"use client"
import DarkMOdeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import { useGlobalContext } from "@/ContextApi";

function DarkMode() {
  const {
    darkModeObject: { darkMode, setDarkMode },
  } = useGlobalContext();
  console.log(darkMode);

  function handelClickedDarkMode(index: number) {
    const updatedDarkModeObject = darkMode.map((item, i) => {
      if (i === index) {
        return { ...item, isSelected: true };
      }
      return { ...item, isSelected: false };
    });
    setDarkMode(updatedDarkModeObject);
  }
  return (
    <div className={`${darkMode[1].isSelected ? "bg-slate-600 border-purple-600" : "bg-slate-100 border-slate-400"} h-[36px] w-[74px] rounded-3xl border  flex items-center gap-2 pl-[5px] `}>
      {darkMode.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => handelClickedDarkMode(index)}
            className={`${
              item.isSelected
                ? "bg-purple-600 text-white"
                : "bg-slate-100 text-purple-600"
            } w-7 h-7 flex items-center justify-center rounded-full top-[4px] p-1 left-1 cursor-pointer select-none `}
          >
            {item.icon}
          </div>
        );
      })}
    </div>
  );
}

export default DarkMode;
