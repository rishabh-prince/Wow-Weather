import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";
import Header from "./Logo";

const Applayout=()=>{
    return (
        <div className="applayout">
            <Header/>
            <Card/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("container"));

root.render(<Applayout/>);