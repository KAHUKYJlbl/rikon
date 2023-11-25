declare namespace MainPage {
  type AppProps = {
    height: number,
    width: number,
  };
}


declare function MainPage({height = 300, width = 300}: MainPage.AppProps): JSX.Element;

export default MainPage;
