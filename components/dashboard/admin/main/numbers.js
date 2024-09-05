import classes from "./main.module.css";
import GroupIcon from "@material-ui/icons/Group";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import VisibilityIcon from "@material-ui/icons/Visibility";
const Numbers = () => {
  const totalGames = 1562;
  const totalUsers = 53168;
  const totalViews = 56456523;
  const avgtime = 8.35;
  return (
    <div className={classes.numbers}>
      <div className={classes.number}>
        <div>{totalGames.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <span>
          <span>
            <PermMediaIcon />
          </span>
          عدد الألعاب
        </span>
      </div>
      <div className={classes.number}>
        <div>{totalUsers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <span>
          <span>
            <GroupIcon />
          </span>
          عدد المستخدمين
        </span>
      </div>
      <div className={classes.number}>
        <div>{totalViews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <span>
          <span>
            <VisibilityIcon />
          </span>
          عدد المشاهدات
        </span>
      </div>
      <div className={classes.number}>
        <div>{avgtime.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <span>
          <span>
            <QueryBuilderIcon />
          </span>
          متوسط الجلسة
        </span>
      </div>
    </div>
  );
};

export default Numbers;
