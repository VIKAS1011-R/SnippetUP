"use client"
import React from "react";
import ProfileUser from "./TopBar/ProfileUser";
import SearchBar from "./TopBar/SearchBar";
import DarkMode from "./TopBar/DarkMode";
import { useGlobalContext } from "@/ContextApi";
import SideBarMenuIcon from "./TopBar/SideBarMenuIcon";
import SwiperSelection from "./NotesArea/SwiperSelection";
import AllNotesSelection from "./NotesArea/AllNotesSection";
import ContentNote from "../ContentNote/ContentNote";

function ContentArea(){
    const {darkModeObject:{darkMode}}=useGlobalContext();

    return (
        <div className={`w-full p-5 ${ darkMode[1].isSelected ? "bg-slate-800" : "bg-slate-100"}`}>
            <TopBar />
            <NotesArea />
        </div>
    );
}

export default ContentArea;

function TopBar(){
    const {darkModeObject:{darkMode}}=useGlobalContext();
    return (
        <div className={`flex justify-between items-center ${ darkMode[1].isSelected ? "bg-slate-900" : "bg-slate-100 "} border border-purple-600  p-3 rounded-lg`}>
            <ProfileUser />
            <SearchBar />
            <div className="flex gap-4 items-center">
            <DarkMode />
            <SideBarMenuIcon />
            </div>
        </div>
    );
}

function NotesArea(){
    const {openContentNoteObject: {openContentNote}} = useGlobalContext();
    const {isMobileObject: {isMobile,setIsMobile}} = useGlobalContext();
    return(
        <div className="mt-5 flex gap-2">
            <div className={`${openContentNote ? `${isMobile ? "w-full":"w-[50%]"}` : "w-full" }`}>
            <SwiperSelection />
            <AllNotesSelection />
            </div>
            <ContentNote />
        </div>
    )
}


