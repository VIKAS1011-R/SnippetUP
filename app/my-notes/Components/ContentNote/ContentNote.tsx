"use client";
import { useGlobalContext } from "@/ContextApi";
import React, { useEffect, useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { SingleNoteType } from "@/app/Types/Type";

function ContentNote() {
  const {
    openContentNoteObject: { openContentNote, setOpencontentNote },
  } = useGlobalContext();
  const {
    selectedNoteObject: { selectedNote, setSelectedNote },
  } = useGlobalContext();
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  const {
    isMobileObject: { isMobile, setIsMobile },
  } = useGlobalContext();
  const [singleNote, setSingleNote] = useState<SingleNoteType | undefined>(
    undefined
  );
  useEffect(() => {
    if (openContentNote) {
      if (selectedNote) {
        setSingleNote(selectedNote);
      }
    }
  }, [openContentNote, selectedNote]);

  console.log(singleNote);
  return (
    <>
      <div
        className={`border ${
          isMobile ? "w-4/5 " : "w-1/2"
        } z-50 p-3 rounded-lg ${
          openContentNote ? "block" : "hidden"
        } h-[610px] ${
          isMobile
            ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : ""
        } ${
          darkMode[1].isSelected
            ? "text-white bg-slate-900"
            : "text-black bg-white"
        }`}
      >
        <div className="border-b-2 relative h-fit flex justify-between items-center pb-2 px-2">
          {singleNote && (
            <ContentNoteHeader
              singleNote={singleNote}
              setSingleNote={setSingleNote}
            />
          )}
          <div
            onClick={() => setOpencontentNote(false)}
            className="cursor-pointer"
          >
            {" "}
            <CloseOutlinedIcon sx={{ fontSize: 20 }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentNote;

function ContentNoteHeader({
  singleNote,
  setSingleNote,
}: {
  singleNote: SingleNoteType;
  setSingleNote: React.Dispatch<
    React.SetStateAction<SingleNoteType | undefined>
  >;
}) {
    const {allNotesObject: {allNotes,setAllNotes}}=useGlobalContext();
    function onUpdateTitle(event:React.ChangeEvent<HTMLInputElement>){
        const newSingleNote = {...singleNote,title:event.target.value};
        setSingleNote(newSingleNote);
        
        // updating the allNotes with the new singleNote
        const newAllNotes = allNotes.map((note)=>{
            if(note._id === singleNote._id){
                return newSingleNote;
            }
            return note;
        });
        setAllNotes(newAllNotes);
}
return (
    <input placeholder="New title ... " value={singleNote.title} onChange={onUpdateTitle} />
)
}
