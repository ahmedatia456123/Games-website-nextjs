import classes from "./allComments.module.css";
import CommentElement from "./commentElement";
import Pagination from "@mui/material/Pagination";
const AllComments = (props) => {
  return (
    <div className={classes.container}>
      <div>عدد اتعليقات: 1</div>
      <div className={classes.comments}>
        <ul>
          <CommentElement />
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

export default AllComments;
