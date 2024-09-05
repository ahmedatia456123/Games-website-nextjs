import classes from "./dashboard.module.css";
import React from "react";
import Link from "next/link";
const SideBar = (props) => {
  const { icon, text, link } = props;
  return (
    <li>
      <Link href={link}>
        <a>
          <div>
            <span className={classes.icon}>{icon}</span>
            <span className={classes.text}>{text}</span>
          </div>
        </a>
      </Link>
    </li>
  );
};
export default SideBar;
