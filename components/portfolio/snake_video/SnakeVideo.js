import Head from "next/head";

const SnakeVideo = () => {
    return (
        <>
            <Head>
                <title>Snake Game Video</title>
                <meta name="author" content="Kevin Tsai"/>
                <meta name="description" content="This YouTube video created by Kevin Tsai showcases some of the really cool features of Excel."/>
            </Head>
            <div className="embed-responsive embed-responsive-16by9" style={{marginTop: "1em"}}>
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Ycti0cx1vwk" allowfullscreen></iframe>
            </div>
        </>

    )
}

export default SnakeVideo;