import classes from "./gamePage.module.css";
import Data from "../../data/data.json";
import GameCard from "../shared/gameCard";
import GameLoader from "./gameLoader";
import Description from "./description";
const GamePage = (props) => {
  const { ImgUrl, title, videoUrl, type, url } = props.gameData;
  const likes = 206546;
  const dislikes = 18546;

  return (
    <div className={classes.gamePageContainer}>
      <div className={classes.leftSection}>
        <div className={classes.gameContainer}>
          <GameLoader
            pageUrl={props.pageUrl}
            likes={likes}
            dislikes={dislikes}
            url={url}
            img={ImgUrl}
            title={title}
          />
        </div>
        <div className={classes.moreGames1}>
          <ul>
            {Data.map((d) => {
              return (
                <GameCard
                  key={d.title.split(" ").join("") + Math.random().toString()}
                  type={d.title}
                  gamedata={d}
                />
              );
            })}
            {Data.map((d, i) => {
              if (i < 7)
                return (
                  <GameCard
                    key={d.title.split(" ").join("") + Math.random().toString()}
                    type={d.title}
                    gamedata={d}
                  />
                );
            })}
          </ul>
        </div>
        <div>
          <Description
            Data={Data}
            likes={likes}
            dislikes={dislikes}
            title={title}
          />
        </div>
        <div className={classes.moreGames2}>
          <ul>
            {Data.map((d) => {
              return (
                <GameCard
                  key={d.title.split(" ").join("") + Math.random().toString()}
                  type={d.title}
                  gamedata={d}
                />
              );
            })}
            {Data.map((d, i) => {
              if (i < 7)
                return (
                  <GameCard
                    key={d.title.split(" ").join("") + Math.random().toString()}
                    type={d.title}
                    gamedata={d}
                  />
                );
            })}
          </ul>
        </div>
      </div>
      <aside className={classes.rightSection}>
        <div className={classes.moreGamesSide1}>
          <ul>
            {Data.map((d, i) => {
              if (i < 4)
                return (
                  <GameCard
                    key={d.title.split(" ").join("") + Math.random().toString()}
                    type={d.title}
                    gamedata={d}
                  />
                );
            })}
          </ul>
        </div>
        <div className={classes.sideAd}>Place Ad here</div>
        <div className={classes.moreGamesSide2}>
          <ul>
            {Data.map((d) => {
              return (
                <GameCard
                  key={d.title.split(" ").join("") + Math.random().toString()}
                  type={d.title}
                  gamedata={d}
                />
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default GamePage;
