"use client"
import { useGlobalContext } from "@/ContextApi";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function SideBarMenuIcon() {
    const {openSidebarObject: {openSideBar,setOpenSideBar}}=useGlobalContext();
  return (
    <>
    {!openSideBar ? (
        <MenuOutlinedIcon
        onClick={()=>setOpenSideBar(true)}
        className="text-slate-600 hidden cursor-pointer max-md:block"
        sx={{ fontSize: 18 }}
        />
    ):
    (
        <CloseOutlinedIcon onClick={()=>setOpenSideBar(false)} className="text-slate-600 cursor-pointer hidden max-md:block" sx={{fontSize:18}} />
    )
    }
    
    </>
  );
}

export default SideBarMenuIcon;
