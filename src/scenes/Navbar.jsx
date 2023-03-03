import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from "../hooks/useMediaQuery";

import menuIcon from "../assets/menu-icon.svg"
import closeIcon from "../assets/close-icon.svg"
import logo from '../assets/logo.png'


const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase()
  return(
    <AnchorLink
    className={`${selectedPage === lowerCasePage ? "text-white" : ""}
      hover:text-yellow transition duration-500`}
    href={`#${lowerCasePage}`}
    onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  const navbarBackground = isTopOfPage ? "" : "bg-purple"

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <img src={logo} alt="logo" />

        {/*DESKTOP */ }
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link 
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
             <Link 
            page="Habilidades"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}

            />
             <Link 
            page="Projetos"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}

            />
             <Link 
            page="Depoimentos"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
             <Link 
            page="Contato"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
            <button 
            className="rounded-full bg-purple p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="menu-icon" src={menuIcon} />
            </button>)}

            {/* MOBILE BUTTON POPUP*/}
            {!isAboveSmallScreens && isMenuToggled && (
              <div className="fixed right-0 bottom-0 h-full bg-purple w-[300px]">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                  <button
                  onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <img src={closeIcon} alt="Close button" />
                  </button>
                </div>

                {/* MENU ITEMS */}
                <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                  <Link 
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}

                  />
                  <Link 
                    page="Habilidades"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}

                  />
                  <Link 
                    page="Projetos"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}

                  />
                  <Link 
                    page="Depoimentos"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link 
                    page="Contato"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            )}
      </div>
    </nav>
  )
}

export default Navbar

