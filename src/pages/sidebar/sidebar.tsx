import React, { useState } from 'react';
// FaBars
import { FaUserTie, FaHome, FaTachometerAlt, FaUsers, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface NavItem {
    icon: React.ElementType;
    label: string;
    path: string;
}

const navItems: NavItem[] = [
    { icon: FaHome, label: 'Home', path: '/' },
    { icon: FaTachometerAlt, label: 'Dashboard', path: '/dashboard' },
    { icon: FaUserTie, label: 'Instructors', path: '/instructors' },
    { icon: FaUsers, label: 'Users', path: '/users' },
    { icon: FaBook, label: 'Courses', path: '/courses' },
    // Uncomment the following line if you want to include the Orders section
    // { icon: FaBook, label: 'Orders', path: '/orders' },
];

const Sidebar: React.FC = () => {
    // setIsCollapsed
    const [isCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState(navItems[0].label);

    // const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    return (
        <div className={`d-flex flex-column flex-shrink-0 p-3 ${isCollapsed ? 'collapsed' : ''}`} style={{ width: isCollapsed ? '4.5rem' : '280px' }}>
            {/* <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <button className="btn btn-link p-0 me-3" onClick={toggleSidebar}>
                    <FaBars />
                </button>
                {!isCollapsed && <span className="fs-4">CodeMaster</span>}
            </div> */}
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                {navItems.map((item) => (
                    <li key={item.label} className="nav-item">
                        <Link to={item.path} className={`nav-link ${activeItem === item.label ? 'active' : 'link-dark'}`} onClick={() => setActiveItem(item.label)}>
                            <item.icon className={isCollapsed ? 'me-0' : 'me-2'} />
                            {!isCollapsed && <span>{item.label}</span>}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="Admin" width="32" height="32" className="rounded-circle me-2" />
                    {!isCollapsed && <strong>Admin</strong>}
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><Link className="dropdown-item" to="/new-project">New project</Link></li>
                    <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/signout">Sign out</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
