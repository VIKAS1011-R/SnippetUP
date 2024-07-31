"use client";
import React from "react";
import FavoutriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { SiJavascript } from "react-icons/si";
import {materialLight,materialDark,atomDark,oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useGlobalContext } from "@/ContextApi";


function AllNotesSelection(){
    return(
        <div className="mt-5 flex flex-wrap gap-1">
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
            <SingleNote />
        </div>
    )
}

export default AllNotesSelection;

function SingleNote(){
    const {darkModeObject: {darkMode}} = useGlobalContext();
    const {openContentNoteObject:{openContentNote,setOpencontentNote}} = useGlobalContext();
    return(
        <div className={`${darkMode[1].isSelected ? "bg-slate-900 text-white" : "bg-white" } ${openContentNote ? "w-full": "w-[33%]"} max-sm:w-full rounded-md py-4`}>
            <NoteHeader/>
            <NoteDate/>
            <NoteTags/>
            <NoteDescription/>
            <CodeBlock language="javascript"/>
            <NoteFooter/>
        </div>
    )
}

function NoteHeader(){
    const {openContentNoteObject:{setOpencontentNote}} = useGlobalContext();
    const {openSidebarObject:{openSideBar,setOpenSideBar}} = useGlobalContext();
    return(
        <div className="flex justify-between mx-4">
            <span className={` font-bold lext-lg w-[87%] cursor-pointer`} onClick={()=>{setOpencontentNote(true); setOpenSideBar(false)}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, culpa?
            </span>
            <FavoutriteBorderOutlinedIcon className="cursor-pointer text-slate-500"/>
        </div>
    )
}

function NoteTags(){
    return (
        <div className="text-slate-500 text-[11px] mx-4 flex flex-wrap gap-1 mt-4  ">
            <span className="bg-purple-100 text-purple-600 p-1 rounded-md px-2">
                functions
            </span>
            <span className="bg-green-100 text-green-600 p-1 rounded-md px-2">
                variables
            </span>
            <span className="bg-blue-100 text-blue-600 p-1 rounded-md px-2">
                loops
            </span>
        </div>
    )
}

function NoteDate(){
    return(
        <div className="mx-4 mt-2 text-slate-500 text-[11px] flex gap-1 font-light">
            <span className="">23th June 2024</span>
        </div>
    )
}

function NoteDescription(){
    const {darkModeObject: {darkMode}} = useGlobalContext();
    return (
        <div className={`mx-4 mt-4 text-slate-600 ${darkMode[1].isSelected ? "text-slate-300" : ""}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, culpa?
        </div>
    )
}

interface CodeBlockProps{
    language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({language}) =>{
    const {darkModeObject: {darkMode}} = useGlobalContext();
    const codeString = `

    import React from 'react'
    
    const AllNotesSection = () => {
      return (
        <div>AllNotesSection</div>
      )
    }
    
    export default AllNotesSection

    `
    return(
        <div className="rounded-md overflow-hidden text-sm">
            <SyntaxHighlighter language={language} style={darkMode[1].isSelected ? oneDark : materialLight}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

function NoteFooter(){
    return(
        <div className="flex justify-between text-[13px] text-slate-500 mx-4 mt-3 ">
            <div className="flex gap-1 items-center">
                <SiJavascript className="text-yellow-500 mb-[2px]" size={15}/>
                <span>JavaScript</span>
            </div>
            <DeleteRoundedIcon className="cursor-pointer" sx={{fontSize:17}}/>
        </div>
    )
}

