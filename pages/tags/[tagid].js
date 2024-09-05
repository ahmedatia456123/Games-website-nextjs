import data from "../../data/data.json";
import GameCard from "../../components/shared/gameCard";
import classes from "./tagPage.module.css";
const TagPage = (props) => {
  const { Data } = props;
  return (
    <div className={classes.tagPage}>
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
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
        {Data.map((d) => {
          return (
            <GameCard
              key={d.title.split(" ").join("") + Math.random().toString()}
              type={d.title}
              gamedata={d}
            />
          );
        })}
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
  );
};
export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const tag = params.tagid;
  console.log(tag);
  return {
    props: {
      Data: data,
    },
  };
}
export default TagPage;
