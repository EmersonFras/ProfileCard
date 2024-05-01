import React from "react"
import twitter from "../assets/Twitter Icon.png"
import insta from "../assets/Instagram Icon.png"
import github from "../assets/GitHub Icon.png"
import facebook from "../assets/Facebook Icon.png"

export default function footer() {
    return (
        <div id = "footer">
            <a href="https://x.com" target="_blank">
                <img className="footer-img" src={twitter} alt="Twitter Logo" />
            </a>
            <a href="https://instagram.com/emersonfras" target="_blank">
                <img className="footer-img" src={insta} alt="Instagram Logo" />
            </a>
            <a href="https://github.com/emersonfras" target="_blank">
                <img className="footer-img" src={github} alt="Github Logo" />
            </a>
            <a href="https://facebook.com" target="_blank">
                <img className="footer-img" src={facebook} alt="Facebook Logo" />
            </a>
        </div>
    )
}