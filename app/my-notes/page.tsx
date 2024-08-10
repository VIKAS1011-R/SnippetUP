
import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import ContentArea from "./Components/ContentArea/ContentArea";

export default function page(){
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <ContentArea />
        </div>
    )
}

