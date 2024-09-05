import SvgSearch from "../../../icons/search";
import Pagination from "@mui/material/Pagination";
import UserElem from "./userElem";
import classes from "./allusers.module.css";
const AllUsers = () => {
  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <input placeholder="أبحث عن ما تريد" />
        <div>
          <SvgSearch />
        </div>
      </div>
      <div>
        <h3>1000 مستخدم</h3>
      </div>
      <div>
        <ul>
          <UserElem title={"Ahmed Attia"} link={"link"} />
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

export default AllUsers;
