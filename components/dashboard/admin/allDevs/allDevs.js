import { useState } from "react";
import classes from "./allDevs.module.css";
import DevElem from "./devElem";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const AllDevs = (props) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className={classes.btn} onClick={handleToggle}>
        إضافة مطور جديد
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <TextField
              className={classes.inputField}
              fullWidth
              id="tagName"
              label="التصنيف"
              variant="filled"
            />
            <Button className={classes.addGame} variant="contained">
              نشر
            </Button>
          </form>
        </Box>
      </Modal>
      <div>
        <ul>
          <DevElem />
        </ul>
      </div>
    </div>
  );
};

export default AllDevs;
