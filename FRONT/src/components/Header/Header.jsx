import React from "react"
import { Link } from "react-router-dom"
import logo from '../../assets/logovb.svg'
const Header = () => {
    return (
        <>
            <header className="w-full bg-gray-200 bg-opacity-50 h-1/10 p-1 border-solid border-b-1 border-black shadow-md m-0">
                <nav className="flex flex-row items-center h-full ">
                    <div className="w-3/6 pl-1">
                        <Link className="flex flex-row items-center">
                            <img className="w-8 h-8" src={logo} alt="logo"></img>
                            <span className="text-blue-500 text-lg">eather-Caster</span>
                        </Link>
                    </div>
                    <div className="w-3/6 flex flex-row justify-end pr-1 gap-2">
                        <button className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 border border-blue-700 rounded">S'inscrire</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Se connecter</button>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;