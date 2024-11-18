import "../src/styles/global.scss";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <div className="App-container">
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
};
export default MyApp;
