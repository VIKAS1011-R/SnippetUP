"use client";
import { useGlobalContext } from "@/ContextApi";
import SearchIcon from "@mui/icons-material/Search";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import React from "react";

function SearchBar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`flex relative items-center ${
        darkMode[1].isSelected
          ? "bg-slate-800 border-slate-400"
          : "bg-slate-300 border-slate-800"
      } p-2 border rounded-3xl pl-3 w-[60%] h-[38px] gap-2`}
    >
      <SearchIcon className="text-purple-500  " sx={{ fontSize: 13 }} />
      <input
        type="text"
        placeholder="Search"
        className={` w-[70%] text-sm ${
          darkMode[1].isSelected
            ? "bg-slate-800 text-white"
            : "bg-slate-300 text-black "
        } outline-none`}
      />
      <AddSnippetButton />
    </div>
  );
  function AddSnippetButton() {
    const {
      openContentNoteObject: { setOpencontentNote },
      selectedNoteObject: { setSelectedNote },
      allNotesObject: { allNotes, setAllNotes },
    } = useGlobalContext();
    function openTheContextNote(){
        const newSingleNote={
            _id:"5",
            title:"",
            creationDate: "",
            tags:[],
            description:"",
            code: ``,
            isFavourite: false,
            language: "",
        };
        setAllNotes([...allNotes,newSingleNote]);
        setSelectedNote(newSingleNote);
        setOpencontentNote(true)
    }
    return (
      <div className="absolute flex gap-2 px-3 rounded-3xl bg-purple-600 p-1 text-[13px] text-white top-[5px] right-[6px] items-center cursor-pointer select-none max-md:px-1">
        <AddOutlinedIcon sx={{ fontSize: 18 }} />
        <div className="max-md:hidden" onClick={openTheContextNote}>Snippet</div>
      </div>
    );
  }
}

export default SearchBar;
