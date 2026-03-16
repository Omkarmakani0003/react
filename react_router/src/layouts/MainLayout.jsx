import Header from "./header"
import Footer from "./footer"
import React from "react"

function MainLayout({children}){
    return(
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default MainLayout