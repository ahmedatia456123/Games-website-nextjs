import Card from "../ui/card";
import Link from "next/link";
import classes from "./gameCard.module.css";
import cls from "classnames";
import { useReducer } from "react";
import { motion } from "framer-motion";
const initialState = false;

const reducer = (state, action) => {
  if (action.type === "ONCARD") {
    return {
      onCard: true,
      playVideo: false,
    };
  } else if (action.type === "LEAVECARD") {
    return {
      onCard: false,
      playVideo: false,
    };
  } else if (action.type === "VIDEOISOK") {
    if (state.onCard === true) {
      return {
        onCard: true,
        playVideo: true,
      };
    } else {
      return {
        onCard: false,
        playVideo: false,
      };
    }
  }
};

const GameCard = (props) => {
  const { ImgUrl, title, videoUrl, type } = props.gamedata;
  const [state, dispatch] = useReducer(reducer, initialState);
  const thumbnailVideoTimer = null;
  const hideImg = {
    opacity: 0,
  };
  const showImg = {
    opacity: 1,
  };
  //onMouseLeaveHandler & onMouseEnterHandler & checkVideoHandler are used to show video gamePlay when mouse hover over the thumbnail on home pagge
  const onMouseLeaveHandler = () => {
    dispatch({ type: "LEAVECARD" });
    clearTimeout(thumbnailVideoTimer);
  };
  const onMouseEnterHandler = () => {
    thumbnailVideoTimer = setTimeout(function () {
      dispatch({ type: "ONCARD" });
    }, 500);
  };
  const checkVideoHandler = (event) => {
    dispatch({ type: "VIDEOISOK" });
  };

  return (
    <motion.li
      whileHover={{ scale: 1.3, zIndex: 100 }}
      transition={{
        ease: "backOut",
        duration: 0.01,
      }}
      className={classes.gameCard}
    >
      <Card>
        <div
          onMouseLeave={onMouseLeaveHandler}
          onMouseEnter={onMouseEnterHandler}
          className={cls(classes.cardMotion, classes.gameCardContainer)}
        >
          <Link href={`/game/${title.split(" ").join("-")}`}>
            <a>
              <div className={classes.title}>{title}</div>
              <div className={classes.cover}></div>
              {videoUrl && state.onCard && (
                <div className={classes.video}>
                  <video
                    onCanPlayThrough={checkVideoHandler}
                    autoPlay
                    muted
                    loop
                    controls={false}
                  >
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                </div>
              )}
              <div
                className={classes.imgContainer}
                style={state.playVideo ? hideImg : showImg}
              >
                {" "}
                <img
                  loading="lazy"
                  alt={title}
                  className={classes.thumbnail}
                  src={ImgUrl}
                />
              </div>
            </a>
          </Link>
        </div>
      </Card>
    </motion.li>
  );
};

export default GameCard;
