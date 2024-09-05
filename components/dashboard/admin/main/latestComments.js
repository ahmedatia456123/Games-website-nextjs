import classes from "./main.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Link from "next/link";

const LatestComments = () => {
  return (
    <div className={classes.lastComments}>
      <h3>آخر التعليقات</h3>
      <div className={classes.comments}>
        <ul>
          <li>
            <span className={classes.commentBody}>
              <span className={classes.rightside}>
                <span className={classes.userinfo}>
                  <Link href="/userDetails">
                    <a>
                      <span>
                        <Avatar>H</Avatar>
                      </span>
                      <span>
                        <strong>Hamo Ali</strong>
                      </span>
                    </a>
                  </Link>
                </span>
                <span className={classes.comment}>
                  لعبة أكثر من اي كيلام ملوش لازيمة علشان نغعبي بس و انت فاهم
                  بقى ان ده اي كلم و السلام علشان نعبيى تيست تيست تيست تيست تيست
                  تيست تيست تيس تيت رائعة
                </span>
              </span>
              <Link href="http://localhost:3000/game/Shell-Shockers">
                <a className={classes.leftSide}>
                  <div>
                    <span>علق في</span>
                    <span>Shell Shockers</span>
                  </div>
                  <div>
                    <span>بتاريخ</span>
                    <span>11/11/2022</span>
                  </div>
                </a>
              </Link>
            </span>
            <IconButton className={classes.delete}>
              <DeleteIcon />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LatestComments;
