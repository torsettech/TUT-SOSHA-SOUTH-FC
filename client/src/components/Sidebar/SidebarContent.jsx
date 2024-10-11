import { Link, useLocation } from "react-router-dom";
import { FaHouseUser, FaUser } from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { PiRankingFill } from "react-icons/pi";
import { IoIosStats } from "react-icons/io";




const navigationLinks = [
  {
    href: "/admin/home",
    iconClass: <FaHouseUser />,
    text: "Dashboard",
  },
  {
    href: "/admin/players",
    iconClass: <FaUser />,
    text: "Players",
  },
  {
    href: "/admin/fixtures",
    iconClass: <HiOutlineClipboardDocumentList />,
    text: "Fixtures",
  },
  {
    href: "/admin/standings",
    iconClass: <PiRankingFill />,
    text: "Standings",
  },
  {
    href: "/admin/stats",
    iconClass: <IoIosStats />,
    text: "Statistics",
  }
];

const SidebarContent = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <ul className="nav-links">
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className={location.pathname === link.href ? "active-page" : ""}
            >
              <span className="icon">{link.iconClass}</span>
              <span className="item">{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarContent;