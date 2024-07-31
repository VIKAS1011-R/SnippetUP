"use client";
import { useGlobalContext } from "@/ContextApi";
import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";


function ContentNote(){
    const {openContentNoteObject:{openContentNote,setOpencontentNote}} = useGlobalContext();
    
    const {darkModeObject: {darkMode}} = useGlobalContext();
    const {isMobileObject:{isMobile,setIsMobile}} = useGlobalContext();
    return (
        <>
        <div className={`border ${isMobile ? "w-4/5 " : "w-1/2"} z-50 p-3 rounded-lg ${openContentNote ? "block" : "hidden"} h-[610px] ${isMobile ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""} ${darkMode[1].isSelected ? "text-white bg-slate-900" :
            "text-black bg-white"}`}>
                <div className="border-b-2 relative h-fit flex justify-between items-center pb-2 px-2">
            ContentNote
            <div onClick={() => setOpencontentNote(false)} className="cursor-pointer"> <CloseOutlinedIcon sx={{fontSize: 20}} /></div>
                </div>
        </div>
        </>
    );
}

export default ContentNote;