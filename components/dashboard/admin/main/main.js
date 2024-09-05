import classes from "./main.module.css";
import Numbers from "./numbers";
import MostViews from "./mostviews";
import LatestComments from "./latestComments";
const AdminMain = () => {
  return (
    <div className={classes.container}>
      <Numbers />
      <MostViews />
      <LatestComments />
    </div>
  );
};

export default AdminMain;
