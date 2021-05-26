import Resume from "../components/index/Resume";
import Head from "next/head";

const Index = () => {
    return (
        <>
            <Head>
                <html lang="en-US"/>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Kevin Tsai's Resume Website</title>
                <meta name="author" content="Kevin Tsai"/>
                <meta name="description" content="This is Kevin Tsai's resume brought to life within the web browser. It was built using the React framework (or library, depending on whom you ask) and hosted on Vercel, powered by Next."/>

                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Stint+Ultra+Condensed&family=Sue+Ellen+Francisco&display=swap" rel="stylesheet"/>
            </Head>
            <Resume />
        </>
    );
};

export default Index;