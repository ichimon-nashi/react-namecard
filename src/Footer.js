import React from "react"
import fbicon from "./facebook-icon.png"
import githubicon from "./github-icon.png"
import linkedinicon from "./linkedin-icon.png"
import phone from "./telephone-icon.png"

export default function Footer() {
    return(
        <div className="footer">
            <a href="https://www.facebook.com/ichimon.nashi/" target="_blank" className="hover"><img src={ fbicon } /></a>
            <a href="https://github.com/ichimon-nashi" target="_blank" className="hover"><img src={ githubicon } /></a>
            <a href="https://www.linkedin.com/in/eric-h-35104b46/" target="_blank" className="hover"><img src={ linkedinicon } /></a>
            <a href="tel:+886973727996" target="_blank" className="hover"><img src={ phone } /></a>
        </div>
    )
}

