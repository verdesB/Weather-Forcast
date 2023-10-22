import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar"

const MainHome = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
    return (
        <main className="main relative flex flex-row flex-grow">
            <Sidebar isOpen={isOpen} toggleOpen={toggleOpen}/>
            <div className={` flex-grow transition-all duration-200 ${isOpen ? 'ml-64' : 'ml-12' }`}>
                <div className="p-12  h-full">content</div>
                </div>
        </main>
    )
}
export default MainHome