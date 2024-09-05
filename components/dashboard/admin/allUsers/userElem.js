import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";
import classes from "./userElem.module.css";
const UserElem = (props) => {
  const { title, link } = props;
  return (
    <li className={classes.userElement}>
      <div>
        <div>
          <span>
            <h3>{title}</h3>
          </span>
        </div>
      </div>
      <div>
        <div>
          <span>
            <Link href="">الملف الشخصي</Link>
          </span>
        </div>
        <span>
          <div>
            <div>اخر تسجيل دخول</div>
            <div>11/6/2022</div>
          </div>
          <div>
            <div>تاريخ التسجيل</div>
            <div>11/5/2022</div>
          </div>
        </span>
        <div>
          <div>
            <IconButton className={classes.delete}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </li>
  );
};

export default UserElem;
