import React from "react"
import Header from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"

const Home = () => {
    return(
        <>
        <Header/>
        <main className="main flex flex-row flex-grow">
        <Sidebar/>
        <div className="flex-grow">content</div>
        </main>
        </>
    )
}
export default Home