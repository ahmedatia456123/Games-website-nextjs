import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
import GamePage from "../../components/gamePage/gamepage";
import data from "../../data/data.json";
const Game = (props) => {
  const router = useRouter();
  const { gameData } = props;
  if (!gameData) {
    return <div>loading</div>;
  }
  const gameName = gameData.title;
  return (
    <Fragment>
      <Head>
        <title>لعبة {gameName} اون لاين بدون تحميل</title>
      </Head>
      <GamePage pageUrl={router.asPath} gameData={gameData} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const gameId = params.gameId;

  const gameData = data.find((d) => d.title === gameId.split("-").join(" "));
  if (!gameData) {
    return { notFound: true };
  }
  return {
    props: {
      gameData: gameData,
    },
  };
}
export async function getStaticPaths() {
  const ids = data.map((game) => game.title);
  const params = ids.map((id) => ({
    params: { gameId: id.split(" ").join("-") },
  }));
  return {
    paths: params,
    fallback: true,
  };
}
export default Game;
