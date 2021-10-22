import React from "react";
import './Menu.scss';
import {useHistory, withRouter} from "react-router-dom";


const Menu=({title,img,size,linkUrl,history,match})=>{
       // console.log(match)
    return(
        <div className={`menu-item ${size} background-image`} style={{backgroundImage: `url(${img})`} }
        onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">Shop now</span>
                </div>
        </div>

    )
}
export default withRouter(Menu);