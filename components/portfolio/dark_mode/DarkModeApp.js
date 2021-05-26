import React from 'react';
import Switch from '@material-ui/core/Switch';

import Head from "next/head";

const DarkModeApp = () => {
    const [state, setState] = React.useState({
        darkMode: false,
      });
    
    const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };

    let DarkModeStyles = {};
    let words;

    if (state.darkMode) {
        DarkModeStyles = {
            backgroundColor: "rgba(35, 35, 35, 1)",
            color: "rgba(202, 202, 202, 1)"
        };
        words = <>
                    <p>
                        How does it feel to read these words using dark mode?
                        It feels great... right?
                        The pairing between the dark background color and the warm font color fuses together to
                        produce a visually pleasant and comfortable reading experience.
                        Blue light has been reduced significantly. So, you won't have to worry about harming your eyes or
                        stunting your melatonin production at night.
                        You can now sleep well at night!
                        Hooray!
                    </p>
                </>;
    } else {
        DarkModeStyles = {
            backgroundColor: "white",
            color: "black"
        };
        words = <>
                    <p>
                        If you don't have any blue light reducing software installed onto your device,
                        chances are... you're probably reading these words with a black font on a white background.
                        Default displays on electronic devices with a white background tend to emit light rather strongly and expose you to an enormous amount of blue
                        light. If you are exposed to this kind of light for extended periods of time, you may end up straining your eyes and even harming your body, especially at night.
                        When you stare at blue light at night, you stunt your body's natural production of melatonin, which makes it harder for you to sleep well.
                        So... what's the solution? Install a "Dark Mode" into every application. This will significantly reduce the amount of blue light exposure emitted from electronic devices, which
                        will save the health of your eyes! Slide the bar at the top to experience the pleasant reading experience of Dark Mode.
                    </p>
                </>;
    }

    return (
        <>
            <Head>
                <title>Dark Mode</title>
                <meta name="author" content="Kevin Tsai"/>
                <meta name="description" content="This Dark Mode app demonstrates the visual difference between a light theme and a dark theme."/>
            </Head>
            <div className="darkmodeapp" style={{backgroundColor: "grey"}}>
                <div className="reader">
                    <div className="reader__screen" style={DarkModeStyles}>
                        <div className="reader__toggler">
                            <Switch
                                checked={state.darkMode}
                                onChange={handleChange}
                                name="darkMode"
                                color="secondary"
                                inputProps={{ 'aria-label': 'dark mode toggler' }}
                            />
                        </div>
                        <article className="reader__text">
                            {words}
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DarkModeApp;