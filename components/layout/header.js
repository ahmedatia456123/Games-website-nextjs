import Link from "next/link";
import classes from "./header.module.css";
import MenuLinks from "./menuLinks";
import Logo from "../shared/logo";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import SvgHome from "../icons/Home";
import SvgArcade from "../icons/Arcade";
import SvgReload from "../icons/Reload";
import SvgMap from "../icons/Map";
import SvgPuzzle from "../icons/Puzzle";
import SvgGun from "../icons/Gun";
import SvgSearch from "../icons/search";
const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const menuData = [
    {
      icon: <SvgHome />,
      text: "الرئيسية",
      link: "",
    },
    {
      icon: <SvgReload />,
      text: "جديد",
      link: "tags/new",
    },
    {
      icon: <SvgGun />,
      text: "أكشن",
      link: "tags/action",
    },
    {
      icon: <SvgMap />,
      text: "مغامرة",
      link: "tags/adventure",
    },
    {
      icon: <SvgArcade />,
      text: "أركيد",
      link: "tags/arcade",
    },
    {
      icon: <SvgReload />,
      text: "أي أو",
      link: "tags/io",
    },
    {
      icon: <SvgPuzzle />,
      text: "ألغاز",
      link: "tags/puzzle",
    },
  ];

  const onHoverStartHandler = (event, info) => {
    console.log("hovering");
    setIsHovering(true);
  };
  const onHoverOndHandler = (event, info) => {
    console.log("unHovering");
    setIsHovering(false);
  };

  return (
    <Fragment>
      <motion.header
        onHoverEnd={onHoverOndHandler}
        onHoverStart={onHoverStartHandler}
        className={classes.headerBar}
      >
        <Link href="/">
          <a className={"headerlayout " + classes.logoContainer}>
            <Logo />
          </a>
        </Link>
        <div className={classes.spaceing}></div>
        <div className={classes.search}>
          <input placeholder="أبحث عن ما تريد" />
          <div>
            <SvgSearch />
          </div>
        </div>
        <nav className={classes.navigation}>
          <div className={classes.navMenuContainer}>
            <ul className={classes.navMenu}>
              {menuData.map((item) => (
                <MenuLinks
                  link={item.link}
                  key={item.text}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </ul>
          </div>
        </nav>
      </motion.header>
      <div className={classes.hiddenHeader}>
        <ul>
          <li>
            <Link href="/">
              <a className="menuElement">
                <div>
                  <SvgPuzzle />
                </div>
                <div></div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
