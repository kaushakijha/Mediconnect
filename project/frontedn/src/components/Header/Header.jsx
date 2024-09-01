import { useEffect, useRef, useState } from "react";
import healthlogo from "../../assets/healthlogo1.jpg";
import userImg from "../../assets/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
// const navLinks = [
//   {
//     path: "/home",
//     display: "Home",
//   },
//   {
//     path: "/doctors",
//     display: "Find a Doctor",
//   },
//   {
//     path: "/services",
//     display: "Services",
//   },
//   {
//     path: "/articles",
//     display: "Articles",
//   },
//   {
//     path: "/contact",
//     display: "Contact",
//   },
// ];

// const Header = () => {
//   const headerRef = useRef(null);
//   const menuRef = useRef(null);

//   const handleStickyHeader = () => {
//     window.addEventListener("scroll", () => {
//       if (
//         document.body.scrollTop > 80 ||
//         document.documentElement.scrollTop > 80
//       ) {
//         headerRef.current.classList.add("sticky__header");
//       } else {
//         headerRef.current.classList.remove("sticky__header");
//       }
//     });
//   };

//   useEffect(() => {
//     handleStickyHeader();
//     return () => window.removeEventListener("scroll", handleStickyHeader);
//   });

//   const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

//   return (
//     <header className="header flex items-center " ref={headerRef}>
//       <div className="container  w-full">
//         <div className="flex items-center justify-between">
//           <div className="mb-3 flex items-center gap-4">
// <figure className="w-[80px] h-[80px] rounded-rull border-3 border-black">
//   <img
//     src={healthlogo1}
//     alt="avatar"
//     className="w-full rounded-full border- border-blue-200"
//   />
// </figure>
//             <div className="relative w-[130px]"></div>
//           </div>

//           {/* ---------menu--------- */}
//           <div
//             className="navigation text-[20px]"
//             ref={menuRef}
//             onClick={toggleMenu}
//           >
//             <ul className="menu flex items-center gap-[2.7rem] text-[20px]">
//               {navLinks.map((Link, index) => (
//                 <li key={index}>
//                   <NavLink
//                     to={Link.path}
//                     className={(navClass) =>
//                       navClass.isActive
//                         ? "text-primaryColor text-[16px] leading-7 font-[600]"
//                         : "text-textColor text-[14px] leading-7 font-[500] hover:text-primaryColor"
//                     }
//                   >
//                     {Link.display}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ----------nav right--------- */}
//           <div className="flex items-center gap-4">
//             <div className="hidden">
//               <Link to="/">
//                 <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
//                   <img src={userImg} className="w-full rounded-full" alt="" />
//                 </figure>
//               </Link>
//             </div>

//             <Link to="/2121">
//               <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
//                 Logout
//               </button>
//             </Link>

//             <span className='md:hidden' onClick={toggleMenu}>
//               <BiMenu className="w-6 h-6 cursor-pointer"/>
//             </span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/articles",
    display: "Articles",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen((prevStat) => !prevStat);
  };
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <figure className="w-[80px] h-[80px] rounded-rull border-3 border-black">
              <img
                src={healthlogo}
                alt="avatar"
                className="w-full rounded-full border- border-blue-200"
              />
            </figure>
          </div>

          {/* ---------menu--------- */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((Link, index) => (
                <li key={index}>
                  <NavLink
                    to={Link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {Link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ----------nav right--------- */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={userImg}
                    className="w-full rounded-full border- border-blue-200"
                    alt=""
                  />
                </figure>
              </Link>
            </div>

            <Link to="/2121">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Logout
              </button>
            </Link>

            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isMenuOpen ? (
                  <X className="w-6 h-6 cursor-pointer text-black" />
                ) : (
                  <Menu className="w-6 h-6 cursor-pointer text-black" />
                )}
              </button>
            </div>

            {isMenuOpen && (
              <div className="absolute top-20 left-56 pr-44 ml-30 w-full bg-white z-10 md:hidden">
                <ul className="flex flex-col items-center gap-0 py-8">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={({ isActive }) =>
                          isActive
                            ? "text-primaryColor text-[16px] leading-7 font-[600]"
                            : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                        }
                      >
                        {link.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
