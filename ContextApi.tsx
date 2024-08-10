"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { SingleNoteType, SideBarMenu, DarkModeType } from "./app/Types/Type";

interface GlobalContextType {
  sideBarMenuObject: {
    sideBarMenu: SideBarMenu[];
    setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
  darkModeObject: {
    darkMode: DarkModeType[];
    setDarkMode: React.Dispatch<React.SetStateAction<DarkModeType[]>>;
  };
  openSidebarObject: {
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };
  openContentNoteObject: {
    openContentNote: boolean;
    setOpencontentNote: React.Dispatch<React.SetStateAction<boolean>>;
  };
  isMobileObject: {
    isMobile: boolean;
    setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  };
  allNotesObject: {
    allNotes: SingleNoteType[];
    setAllNotes: React.Dispatch<React.SetStateAction<SingleNoteType[]>>;
  };
  selectedNoteObject: {
    selectedNote: SingleNoteType | null;
    setSelectedNote: React.Dispatch<React.SetStateAction<SingleNoteType | null>>;
  }
}

const ContextProvider = createContext<GlobalContextType>({
  sideBarMenuObject: {
    sideBarMenu: [],
    setSideBarMenu: () => {},
  },
  darkModeObject: {
    darkMode: [],
    setDarkMode: () => {},
  },
  openSidebarObject: {
    openSideBar: false,
    setOpenSideBar: () => {},
  },
  openContentNoteObject: {
    openContentNote: false,
    setOpencontentNote: () => {},
  },
  isMobileObject: {
    isMobile: false,
    setIsMobile: () => {},
  },
  allNotesObject: {
    allNotes: [],
    setAllNotes: () => {},
  },
  selectedNoteObject:{
    selectedNote:null,
    setSelectedNote: ()=>{},
  }
});

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBarMenu, setSideBarMenu] = useState<SideBarMenu[]>([
    {
      id: 1,
      name: "All Snippets",
      isSelected: true,
      icons: <BorderAllIcon sx={{ fontSize: 18 }} />,
    },
    {
      id: 2,
      name: "Favorite",
      isSelected: false,
      icons: <FavoriteBorderIcon sx={{ fontSize: 18 }} />,
    },
    {
      id: 3,
      name: "Trash",
      isSelected: false,
      icons: <DeleteOutlineOutlinedIcon sx={{ fontSize: 18 }} />,
    },
    {
      id: 4,
      name: "Logout",
      isSelected: false,
      icons: <LogoutRoundedIcon sx={{ fontSize: 18 }} />,
    },
  ]);

  const [darkMode, setDarkMode] = useState<DarkModeType[]>([
    {
      id: 1,
      icon: <LightModeIcon sx={{ fontsize: 18 }} />,
      isSelected: false,
    },
    {
      id: 2,
      icon: <DarkModeIcon sx={{ fontsize: 18 }} />,
      isSelected: true,
    },
  ]);

  const [openSideBar, setOpenSideBar] = useState(false);
  const [openContentNote, setOpencontentNote] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [allNotes, setAllNotes] = useState<SingleNoteType[]>([]);
  const [selectedNote,setSelectedNote] = useState<SingleNoteType | null>(null)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function updateAllNotes() {
      const allNotes = [
        {
          _id: "1",
          title: "This is a note",
          isFavourite: false,
          tags: ["tag1", "tag2"],
          description: "This is a note",
          code: `console.log('Hello World')`,
          language: "javascript",
          creationDate: "2021-10-10",
        },
        {
          _id: "2",
          title: "This is another note",
          isFavourite: true,
          tags: ["tag3", "tag4","tag5"],
          description: "This is aanother note",
          code: `def hello_world():
    print("Hello World")
if __name__ == "__main__":
    hello_world()
          `,
          language: "python",
          creationDate: "2019-01-10",
        },
        {
          _id: "3",
          title: "Another note",
          isFavourite: true,
          tags: ["tag6"],
          description: "Another note",
          code: `
function helloWorld(){
    console.log('Hello World')
    }
helloWorld()
          `,
          language: "javascript",
          creationDate: "2020-08-21",
        },
      ];
      setTimeout(() => {
        setAllNotes(allNotes);
      },1200);
    }
    updateAllNotes();
  },[]);

  return (
    <ContextProvider.Provider
      value={{
        sideBarMenuObject: {
          sideBarMenu,
          setSideBarMenu,
        },
        darkModeObject: { darkMode, setDarkMode },
        openSidebarObject: { openSideBar, setOpenSideBar },
        openContentNoteObject: { openContentNote, setOpencontentNote },
        isMobileObject: { isMobile, setIsMobile },
        allNotesObject: {allNotes,setAllNotes},
        selectedNoteObject: {selectedNote,setSelectedNote},
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};
