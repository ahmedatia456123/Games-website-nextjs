import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import classes from "./gameElement.module.css";
import Link from "next/link";
const GameElement = (props) => {
  const { title, img, link } = props;
  return (
    <li className={classes.gameElement}>
      <div>
        <img src={img} />
        <div>
          <span>
            <h3>{title}</h3>
            <div>المؤلف</div>
            <div>
              <Link href="">Ahmed Attia</Link>
            </div>
          </span>
        </div>
      </div>
      <div>
        <div>
          <span>
            <Link href="">إحصائيات</Link>

            <Link href="">عرض</Link>

            <Link href="">تعديل</Link>
          </span>
        </div>
        <span>
          <div>
            <div>
              <div>عودة للمستودع</div>
            </div>
            <div>
              <div>
                <VisibilityIcon />
              </div>
              <div>23,562</div>
            </div>
          </div>
          <div>
            <div>تاريخ النشر</div>
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

export default GameElement;
