import Link from 'next/link';
import {FaChartLine, FaCog, FaHome} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'

interface LeftBarProps {
  onNavItemChange: (navItem: string) => void;
}

const LeftBar: React.FC<LeftBarProps> = ({onNavItemChange}) =>{
  return (
    <nav className="leftbar">
      <ul>
        <li onClick={()=>{onNavItemChange('health')}}>
            <FaChartLine/>
            <span>Health Metrics</span>
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
