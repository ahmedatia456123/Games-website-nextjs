import classes from "./homepage.module.css";
import GamesSections from "./home-component/gamesSections";
import { Fragment } from "react";
import { motion } from "framer-motion";
const HomePage = (props) => {
  const { data } = props;
  const recommededGames = data.filter((d) => {
    if (d.type.includes("recommeded")) {
      return d;
    }
  });
  const normalGame = data.filter((d) => {
    if (d.type.includes("normal")) {
      return d;
    }
  });

  return (
    <Fragment>
      <GamesSections
        key="recommnded"
        recClass={classes.recommended}
        data={recommededGames}
        title="ألعاب مقترحة"
      />
      <GamesSections
        key="action"
        recClass={classes.normal}
        data={normalGame}
        moreGames="/"
        title="ألعاب أكشن"
      />
    </Fragment>
  );
};

export default HomePage;
