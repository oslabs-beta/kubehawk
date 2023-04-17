import Link from 'next/link';
import {FaChartLine, FaCog, FaHome} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'



function LeftBar() {
  return (
    <nav className="leftbar">
      <ul>
        <li>
        <Link href='/'>
          <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
        <Link href='/'>
            <FaChartLine/>
            <span>Health Metrics</span>
            </Link>
        </li>
        <li>
        <Link href='/'>
        <FiUsers />
            <span>RBAC Metrics</span>
            </Link>
        </li>
        <li>
        <Link href='/cluster'>
        <FaCog/>
            <span>Settings</span>
            </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LeftBar;
