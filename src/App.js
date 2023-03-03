import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import About from "./About"

export default function App() {
    return(
        <div className="border-box">
            <div className="container">
                <Header />
                <About />
                <Footer />
            </div>
        </div>    
    )
}