import React, { useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { BiCalendarAlt, BiNote, BiTask, BiMap } from 'react-icons/bi';
import { AiFillContacts } from 'react-icons/ai';
import { IoExtensionPuzzleOutline } from 'react-icons/io5';
import './SideBar.css'

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`side-panel ${isOpen ? 'open' : ''}`}>
      <div className="panel-header">
        <button className="panel-toggle" onClick={togglePanel}>
          <MdKeyboardArrowLeft className="panel-icon" />
        </button>
      </div>
      <nav className="panel-nav">
        <ul className="panel-menu">
          <li className="panel-menu-item">
            <a href="/calendar" className="panel-link">
              <BiCalendarAlt className="panel-icon" />
              <span className="panel-text">Calendar</span>
            </a>
          </li>
          <li className="panel-menu-item">
            <a href="/keep" className="panel-link">
              <BiNote className="panel-icon" />
              <span className="panel-text">Keep</span>
            </a>
          </li>
          <li className="panel-menu-item">
            <a href="/tasks" className="panel-link">
              <BiTask className="panel-icon" />
              <span className="panel-text">Tasks</span>
            </a>
          </li>
          <li className="panel-menu-item">
            <a href="/contacts" className="panel-link">
              <AiFillContacts className="panel-icon" />
              <span className="panel-text">Contacts</span>
            </a>
          </li>
          <li className="panel-menu-item">
            <a href="/maps" className="panel-link">
              <BiMap className="panel-icon" />
              <span className="panel-text">Maps</span>
            </a>
          </li>
          <li className="panel-menu-item">
            <a href="/addons" className="panel-link">
              <IoExtensionPuzzleOutline className="panel-icon" />
              <span className="panel-text">Get add-ons</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidePanel;