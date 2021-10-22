import React from "react";
import './Menu.scss';


const Menu=({title,img,size})=>{

    return(
        <div className={`menu-item ${size} background-image`} style={{backgroundImage: `url(${img})`}}>
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">Shop now</span>
                </div>
        </div>

    )
}
export default Menu;