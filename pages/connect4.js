import 'bootstrap/dist/css/bootstrap.css';
import Connect4Game from "../components/portfolio/connect_4_game/Connect4Game";

import Head from "next/head";

const Connect4 = () => {
    return (
        <>
            <Head>
                <title>Connect 4</title>
                <meta name="author" content="Kevin Tsai"/>
                <meta name="description" content="Play Connect 4 against an AI that was built using the mini-max algorithm with alpha-beta pruning."/>
            </Head>
            <Connect4Game />
        </>
    );
};

export default Connect4;