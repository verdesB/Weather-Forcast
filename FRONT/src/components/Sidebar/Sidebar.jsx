import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faHome, faCircleInfo, faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons';
import './sidebar.scss'

const Sidebar = ({isOpen, toggleOpen}) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`absolute overflow-auto z-10 w-64 h-full bg-gray-200 bg-opacity-50 shadow-md text-white transition-all duration-200 transform ${isOpen ? 'translate-x-0' : 'translate-x-[calc(-100%+3rem)]'}`}>
      <div className="flex flex-row justify-end">
      <button  className="buttonToggle hidden block py-2.5 px-4 rounded transition duration-200 text-blue-500 hover:bg-blue-700 hover:text-white" onClick={toggleOpen} >
  {isOpen ? <FontAwesomeIcon icon={faArrowLeft} /> : <FontAwesomeIcon icon={faArrowRight} />}
  {/* {isOpen ? 'Fermer' : 'Ouvrir'} */}
</button>
      </div>
      <nav className="mt-6 flex flex-col gap-4">
        <Link to="/" className="flex flex-row justify-between ">
          <p className="py-2.5 px-4 rounded transition duration-200 text-blue-500 hover:bg-blue-700 hover:text-white">Accueil</p>
          
          <FontAwesomeIcon className="block w-4 py-2.5 px-4 rounded transition duration-200 text-blue-500 hover:bg-blue-700  hover:text-white" icon={faHome} />
        </Link>
        <Link to="/" className="flex flex-row justify-between ">
          <p className="py-2.5 px-4 rounded transition duration-200 text-blue-500 hover:bg-blue-700 hover:text-white">Rechercher</p>
          <FontAwesomeIcon className="block w-4 py-2.5 px-4 rounded transition duration-200 text-blue-500 hover:bg-blue-700 hover:text-white" icon={faMagnifyingGlass} />
        </Link>
        <Link to="/" className="flex flex-row justify-between ">
          <p className="py-2.5 px-4 rounded transition duration-200 text-blue-500 hover:bg-blue-700 hover:text-white">Mes Favoris</p>
          <FontAwesomeIcon className="block w-4 py-2.5 px-4 rounded transition duration-200 text-blue-500 hover:bg-blue-700 hover:text-white" icon={faHeart} />
        </Link>
        <Link to="/" className="flex flex-row justify-between ">
          <p className="py-2.5 px-4 rounded transition duration-200 text-blue-500 hover:bg-blue-700 hover:text-white">À propos</p>
          <FontAwesomeIcon className="block w-4 py-2.5 px-4 rounded transition duration-200 text-blue-500 hover:bg-blue-700 hover:text-white" icon={faCircleInfo} />
        </Link>
        
      </nav>
    </div>
  );
};

export default Sidebar;