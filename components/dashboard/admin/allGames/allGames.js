import classes from "./allGames.module.css";
import GameElement from "./gameElement";
import SvgSearch from "../../../icons/search";
import Pagination from "@mui/material/Pagination";

const AllGames = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <input placeholder="أبحث عن ما تريد" />
        <div>
          <SvgSearch />
        </div>
      </div>
      <div className={classes.menu}>
        <ul>
          <li>
            <div>3,569</div>
            <div>منشور</div>
          </li>
          <li>
            <div>53</div>
            <div>في المستودع</div>
          </li>
          <li>
            <div>1</div>
            <div>في السلة</div>
          </li>
        </ul>
      </div>
      <div className={classes.gameList}>
        <ul>
          <GameElement
            img={
              "https://images.crazygames.com/shellshockersio/20211202050253/shellshockersio-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop"
            }
            title={"Shell Shockers"}
            link={""}
          />
        </ul>
      </div>
      <Pagination
        className={classes.pagination}
        count={10}
        size="large"
        shape="circular"
        color="primary"
      />
    </div>
  );
};

export default AllGames;
