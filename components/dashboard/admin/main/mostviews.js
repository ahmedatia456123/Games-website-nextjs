import classes from "./main.module.css";
import TimelineIcon from "@material-ui/icons/Timeline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Link from "next/link";

const MostViews = () => {
  return (
    <div className={classes.mostViewed}>
      <h3>الأكثر مشاهدة هذا اليوم</h3>
      <div>
        <ul className={classes.menu}>
          <li>يوم</li>
          <li>اسبوع</li>
          <li>شهر</li>
        </ul>
      </div>
      <div>
        <ul className={classes.postsList}>
          <li>
            <span>
              <img
                src="https://images.crazygames.com/shellshockersio/20211202050253/shellshockersio-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=364&h=208&fit=crop"
                className={classes.thmbnail}
              />
              <h3>Shell Shockers</h3>
            </span>
            <span>
              <span>
                <Link href="">
                  <a className={classes.postsStates}>
                    <span>
                      <span>
                        <VisibilityIcon />
                      </span>
                      <span>عرض</span>
                    </span>
                  </a>
                </Link>
              </span>
              <span>
                <Link href="">
                  <a className={classes.postsStates}>
                    <span>
                      <TimelineIcon />
                    </span>
                    <span>الإحصائيات</span>
                  </a>
                </Link>
              </span>
              <span>
                <VisibilityIcon />
              </span>
              <span>21,365</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MostViews;
