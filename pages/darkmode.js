import 'bootstrap/dist/css/bootstrap.css';
import DarkModeApp from "../components/portfolio/dark_mode/DarkModeApp";

import Head from "next/head";

const DarkMode = () => {
    return (
        <>
            <Head>
                <title>Dark Mode</title>
                <meta name="author" content="Kevin Tsai"/>
                <meta name="description" content="This Dark Mode app demonstrates the visual difference between a light theme and a dark theme."/>
            </Head>
            <DarkModeApp />
        </>
    );
};

export default DarkMode;