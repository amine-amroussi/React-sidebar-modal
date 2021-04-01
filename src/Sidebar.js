import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from "./context";

const Sidebar = () => {

  const {isSidebarOpen  , closeSidebar} = useGlobalContext();

  return <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : null } `} > 
    <div className="sidebar-header" >
      <img src={logo} className="logo" alt="coding addict" />
      <button className="close-btn" onClick={closeSidebar} >
        <FaTimes />
      </button>
    </div>
    <ul className="links" >
      {
        links.map(link => {

          const {id , icon , url , text} = link;

          return <li key={id} >
            <a href={url} target="_blanck" > {icon} {text} </a>
          </li>
        })
      }
    </ul>
    <ul className="social-icons" >
      {social.map(link => {
        const {id , url , icon} = link;
        return <li key={id} >
          <a href={url} target ="_blanck" > {icon} </a>
        </li>
      })}
    </ul>
  </aside>
}

export default Sidebar
