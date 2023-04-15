"use client"

import {FaChartLine, FaCog, FaHome, FaUsers} from 'react-icons/fa'


function LeftBar() {
  return (
    <nav className="leftbar">
      <ul>
        <li>
          <a href="#">
          <FaHome />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaChartLine/>
            <span>Analytics</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaCog/>
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
          <FaUsers />
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default LeftBar;
