import React from "react";
import Github from "../Assets/Images/Github.png"
import Linkedin from "../Assets/Images/Linkedin.png"
import Mail from "../Assets/Images/Mail.png"

function Teamcard(props) {

    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt="Profile" />
            </div>
            <p className="name">{props.name}</p>
            <p>{props.role}</p>
            <div className="socials">
                <a href={props.github} target="_blank" rel="noreferrer" className="github"><img src={Github} alt="Github Logo" className="socialLogos"/></a>
                <a href={props.linkedin} target="_blank" rel="noreferrer" className="twitter"><img src={Linkedin} alt="Linkedin Logo" className="socialLogos"/></a>
                <a href={props.mail} target="_blank" rel="noreferrer" className="pinterest"><img src={Mail} alt="Mail Logo" className="socialLogos"/></a>
            </div>
        </div>
    );
}

export default Teamcard;