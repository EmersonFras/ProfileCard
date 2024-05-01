import React from "react"
import pfp from "../assets/profile-pic.jpg"
import mail from "../assets/Mail.png"
import linkedin from "../assets/linkedin.png"


export default function head() {
    return (
        <div id = "head">
            <img className = "pfp" src={pfp} alt="Picture of Emerson Frasure"/>
            <h1 className = "name">Emerson Frasure</h1>
            <h5 className ="job">CS Major</h5>
            <div className="btns">
                <a href = "mailto:emersonfrasure@gmail.com" target="_blank" id = "mail-btn" className="link">
                <img className = "btn-img" src={mail} alt="mail logo"/>
                <span>Email</span> 
                </a>

                <a href = "https://linkedin.com/in/emersonfras" target="_blank" id = "linkedin-btn"className="link">
                    <img className = "btn-img" src={linkedin} alt="linkedin logo"/>
                    <span>Linkedin</span>
                </a>
            </div>
        </div>
    )
}