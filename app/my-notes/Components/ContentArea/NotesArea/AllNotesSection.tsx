"use client";
import React from "react";
import FavoutriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { SiJavascript } from "react-icons/si";
import {materialLight,materialDark,atomDark,oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useGlobalContext } from "@/ContextApi";
import { SingleNoteType } from "@/app/Types/Type";


function AllNotesSection(){
    const {darkModeObject: {darkMode}} = useGlobalContext();
    const {openContentNoteObject:{openContentNote,setOpencontentNote}} = useGlobalContext();
    const {allNotesObject: {allNotes,setAllNotes}} = useGlobalContext();
    return (
        <div className= "mt-5  flex flex-wrap gap-1">
            {allNotes.map((note,index)=>(
                <div key={index} className={`${darkMode[1].isSelected ? "bg-slate-900 text-white" : "bg-white text-slate-600" } ${openContentNote ? "w-full": "w-[33%]"} max-sm:w-full border border-purple-600 rounded-md py-4`}>
                    <SingleNote note={note} />
                </div>
            ))}
        </div>
    )
}
export default AllNotesSection;


function SingleNote({note}: {note: SingleNoteType}){
    const {darkModeObject: {darkMode}} = useGlobalContext();
    const {openContentNoteObject:{openContentNote,setOpencontentNote}} = useGlobalContext();
    const {title,creationDate,tags,description,code,isFavourite,language} = note;
    return(
        <>
            <NoteHeader title={title} isFavourite={isFavourite}/>
            <NoteDate creationDate={creationDate}/>
            <NoteTags tags={tags}/>
            <NoteDescription description={description} />
            <CodeBlock language={language} code={code}/>
            <NoteFooter language={language} />
        </>
    )
}

// function AllNotesSelection(){
//     return(
//         <div className="mt-5  flex flex-wrap gap-1">
//             <SingleNote />
//             <SingleNote />
//             <SingleNote />
//             <SingleNote />
//             <SingleNote />
//             <SingleNote />
//             <SingleNote />
//             <SingleNote />
//             <SingleNote />
//         </div>
//     )
// }


// function SingleNote(){
//     const {darkModeObject: {darkMode}} = useGlobalContext();
//     const {openContentNoteObject:{openContentNote,setOpencontentNote}} = useGlobalContext();
//     return(
//         <div className={`${darkMode[1].isSelected ? "bg-slate-900 text-white" : "bg-white text-slate-600" } ${openContentNote ? "w-full": "w-[33%]"} max-sm:w-full border border-purple-600 rounded-md py-4`}>
//             <NoteHeader/>
//             <NoteDate/>
//             <NoteTags/>
//             <NoteDescription/>
//             <CodeBlock language="javascript"/>
//             <NoteFooter/>
//         </div>
//     )
// }

function NoteHeader({title,isFavourite}: {title:string,isFavourite:boolean}){
    const {openContentNoteObject:{setOpencontentNote}} = useGlobalContext();
    const {openSidebarObject:{openSideBar,setOpenSideBar}} = useGlobalContext();
    return(
        <div className="flex justify-between mx-4">
            <span className={` font-bold lext-lg w-[87%] cursor-pointer hover:text-purple-600 `} onClick={()=>{setOpencontentNote(true); setOpenSideBar(false)}}>
                {title}
            </span>
            <FavoutriteBorderOutlinedIcon className="cursor-pointer text-slate-500"/>
        </div>
    )
}

function NoteTags({tags}: {tags:string[]}){
    return (
        <div className="text-slate-500 text-[11px] mx-4 flex flex-wrap gap-1 mt-4  ">
            {tags.map((tag,index)=>(
                <span key={index} className="bg-purple-100 text-purple-600 border border-purple-600 p-1 rounded-md px-2">
                    {tag}
                </span>
            ))}
        </div>
    )
}

function NoteDate({creationDate}: {creationDate: string}){
    return(
        <div className="mx-4 mt-2 text-slate-500 text-[11px] flex gap-1 font-light">
            <span className="">{creationDate}</span>
        </div>
    )
}

function NoteDescription({description}: {description: string}){
    const {darkModeObject: {darkMode}} = useGlobalContext();
    return (
        <div className={`mx-4 mt-4  ${darkMode[1].isSelected ? "text-slate-300" : "text-slate-600"}`}>
            {description}
        </div>
    )
}

interface CodeBlockProps{
    language: string;
    code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({language,code}) =>{
    const {darkModeObject: {darkMode}} = useGlobalContext();
    return(
        <div className="rounded-md overflow-hidden text-sm">
            <SyntaxHighlighter language={language} style={darkMode[1].isSelected ? oneDark : materialLight}>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}

function NoteFooter({language}: {language:string}){
    return(
        <div className="flex justify-between text-[13px] text-slate-500 mx-4 mt-3 ">
            <div className="flex gap-1 items-center">
                <SiJavascript className="text-yellow-500 mb-[2px]" size={15}/>
                <span>{language}</span>
            </div>
            <DeleteRoundedIcon className="cursor-pointer" sx={{fontSize:17}}/>
        </div>
    )
}

