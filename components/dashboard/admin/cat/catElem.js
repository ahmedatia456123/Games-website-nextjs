import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import classes from "./catElem.module.css";
import Link from "next/link";
const CatElem = (props) => {
  return (
    <li className={classes.catElem}>
      <div>
        <img src="https://images.crazygames.com/time-shooter-2/20220314160843/time-shooter-2-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=178&h=100&fit=crop" />
        <h3>أكشن</h3>
      </div>
      <div>
        <div>
          <span>
            <div>عدد الألعاب</div>
            <div>562</div>
          </span>
        </div>
        <div>
          <Link href="">
            <a>عرض</a>
          </Link>
        </div>
        <div>
          <IconButton className={classes.delete}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </li>
  );
};

export default CatElem;
