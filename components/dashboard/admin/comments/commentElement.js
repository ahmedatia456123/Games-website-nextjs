import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Link from "next/link";
import classes from "./commentElement.module.css";
const CommentElement = (props) => {
  return (
    <li className={classes.CommentElement}>
      <div className={classes.right}>
        <div className={classes.userInfo}>
          <Link href="">
            <a>
              <div>
                <div>
                  <Avatar>H</Avatar>
                </div>
                <div>name</div>
              </div>
            </a>
          </Link>
        </div>
        <div>comment</div>
      </div>
      <div className={classes.left}>
        <div>
          <Link href="">
            <a>
              <span>
                <div>علق في</div>
                <div>Shell rocker</div>
              </span>
            </a>
          </Link>
        </div>
        <div>
          <span>
            <span>بتاريخ</span>
            <span>11/5/2012</span>
          </span>
        </div>
        <div>
          <span>
            <div>
              <IconButton className={classes.delete}>
                <DeleteIcon />
              </IconButton>
            </div>
            <div>عودة للمستودع</div>
          </span>
        </div>
      </div>
    </li>
  );
};

export default CommentElement;
