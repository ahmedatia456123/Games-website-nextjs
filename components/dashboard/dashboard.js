import React from "react";
import SideBar from "./sideBar";
import classes from "./dashboard.module.css";
import AddIcon from "@material-ui/icons/Add";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import PeopleIcon from "@material-ui/icons/People";
import TimelineIcon from "@material-ui/icons/Timeline";
import StorageIcon from "@material-ui/icons/Storage";
import UpdateIcon from "@material-ui/icons/Update";
import HomeIcon from "@material-ui/icons/Home";
import CommentIcon from "@material-ui/icons/Comment";
import Link from "next/link";
const listData = [
  {
    icon: <HomeIcon />,
    text: "نظرة عامة",
    link: "/dashborad/admin",
  },
  {
    icon: <AddIcon />,
    text: "إضافة لعبة جديدة",
    link: "/dashborad/admin/addnewgame",
  },
  {
    icon: <StorageIcon />,
    text: "جميع الألعاب",
    link: "/dashborad/admin/allgames",
  },
  {
    icon: <UpdateIcon />,
    text: "التصنيفات",
    link: "/dashborad/admin/allcat",
  },
  {
    icon: <CommentIcon />,
    text: "التعليقات",
    link: "/dashborad/admin/allcomments",
  },
  {
    icon: <PeopleIcon />,
    text: "المستخدمين",
    link: "/dashborad/admin/users",
  },
  {
    icon: <PeopleIcon />,
    text: "المطورين",
    link: "/dashborad/admin/alldevelopers",
  },
  {
    icon: <TimelineIcon />,
    text: "الإحصائيات",
    link: "",
  },
];
const Dashboard = (props) => {
  return (
    <div className={classes.dashboardContainer}>
      <aside className={classes.sideBar}>
        <ul>
          {listData.map((data) => (
            <SideBar
              key={data.text}
              icon={data.icon}
              link={data.link}
              text={data.text}
            />
          ))}
        </ul>
      </aside>
      <div className={classes.mainPart}>{props.children}</div>
    </div>
  );
};

export default Dashboard;
