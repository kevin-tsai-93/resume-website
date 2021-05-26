import 'bootstrap/dist/css/bootstrap.css';
import '../styles/resume.css';
import '../styles/responsive-font.css';
import '../styles/square.css';
import '../styles/connect4game.css';
import '../styles/darkmode.css';
import NavigationBar from "../components/navbar/NavigationBar";
// import App from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
      <>
          <div className="container">
            <NavigationBar />
            <Component {...pageProps} />              
          </div>
      </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
